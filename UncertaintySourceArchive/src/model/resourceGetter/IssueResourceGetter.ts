import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import { BaseUncertaintyIssueParser } from './parser/BaseUncertaintyIssueParser'
import { UncertaintyIssueParser } from './parser/UncertaintyIssueParser'

/**
 * Gets uncertainties from GitHub issues
 */
export class IssueResourceGetter extends ResourceGetter {
  private static readonly BASE_URL = 'https://api.github.com'
  public static readonly OWNER = 'abunai-dev'
  public static readonly REPO = 'UncertaintySourceArchive'
  private static readonly ISSUES_PER_SITE = 30
  public static readonly ACCEPTED_ISSUE_LABEL = 'accepted'
  public static readonly PROPOSED_ISSUE_LABEL = 'proposal'

  /** @inheritdoc */
  public async getUncertaintyCount(): Promise<number> {
    let sum = 0
    let lastPage = 0
    let page = 1
    do {
      lastPage = await this.getIssueList(page).then((data) => data.length)
      sum += lastPage
      page++
    } while (lastPage === IssueResourceGetter.ISSUES_PER_SITE)
    return sum
  }

  /** @inheritdoc */
  public getDefaultPerPageAmount(): number {
    return IssueResourceGetter.ISSUES_PER_SITE
  }

  /** @inheritdoc */
  public async getPage(page: number, perPage?: number): Promise<BaseUncertainty[]> {
    const parser = new BaseUncertaintyIssueParser()
    const uncertainties: Promise<BaseUncertainty>[] = []
    this.getIssueList(page, perPage).then((data) =>
      data.map((issue: any) => uncertainties.push(parser.parse(issue.body)))
    )

    return Promise.all(uncertainties)
  }

  /** @inheritdoc */
  public async getUncertainty(id: number): Promise<Uncertainty> {
    return fetch(
      `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues/${id}`
    )
      .then((response) => response.json())
      .then((data) => new UncertaintyIssueParser().parse(data.body))
  }

  public async getAll(): Promise<BaseUncertainty[]> {
    const issueCount = await this.getUncertaintyCount()
    const pageCount = Math.ceil(issueCount / 100)
    const issues = await Promise.all(
      Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => this.getPage(page))
    )
    return issues.flat()
  }

  private async getIssueList(page: number, perPage?: number): Promise<any[]> {
    return await fetch(
      `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${
        IssueResourceGetter.REPO
      }/issues?labels=${IssueResourceGetter.ACCEPTED_ISSUE_LABEL}&state=open&per_page=${
        perPage ?? IssueResourceGetter.ISSUES_PER_SITE
      }&page=${page}`
    ).then((response) => response.json())
  }
}
