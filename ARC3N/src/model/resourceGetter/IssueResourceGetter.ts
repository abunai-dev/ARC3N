import type { JsonUncertainty } from '../uncertainty/Uncertainty'
import { UncertaintyIssueParser } from './parser/UncertaintyIssueParser'

/**
 * Gets uncertainties from GitHub issues
 */
export class IssueResourceGetter {
  private static readonly BASE_URL = 'https://api.github.com'
  public static readonly OWNER = 'abunai-dev'
  public static readonly REPO = 'ARC3N'
  private static readonly ISSUES_PER_SITE = 100
  public static readonly ACCEPTED_ISSUE_LABEL = 'accepted'
  public static readonly PROPOSED_ISSUE_LABEL = 'proposal'

  public async get(): Promise<JsonUncertainty[]> {
    const uncertainties: Promise<JsonUncertainty>[] = []
    let lastFetchedCount = 0
    let pageIndex = 0
    const parser = new UncertaintyIssueParser()
    do {
      const json = (await fetch(
        `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues?labels=${IssueResourceGetter.ACCEPTED_ISSUE_LABEL}&state=open&per_page=${IssueResourceGetter.ISSUES_PER_SITE}&page=${pageIndex}`
      ).then((r) => r.json())) as any[]

      lastFetchedCount += json.length

      json.forEach((j) => {
        uncertainties.push(
          parser.parse(j.body).then((u) => {
            u.id = j.number
            return u
          })
        )
      })

      pageIndex++
    } while (lastFetchedCount >= IssueResourceGetter.ISSUES_PER_SITE)

    return Promise.all(uncertainties)
  }
}
