import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import { BaseUncertaintyIssueParser } from './parser/BaseUncertaintyIssueParser'

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

  public getDefaultPerPageAmount(): number {
    return IssueResourceGetter.ISSUES_PER_SITE
  }

  public async getList(page: number, perPage?: number): Promise<BaseUncertainty[]> {
    const issueIds = await this.getIssueList(page, perPage).then((data) =>
      data.map((issue: any) => issue.number)
    )

    const issues = await Promise.all(issueIds.map((id) => this.getIssue(id)))

    const parser = new BaseUncertaintyIssueParser()
    return issues.map((issue: any) => parser.parse(issue.body))
  }

  public async getUncertainty(id: number): Promise<Uncertainty> {
    void id
    throw new Error('Method not implemented.')
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

  private async getIssue(id: number): Promise<any> {
    return await fetch(
      `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues/${id}`
    ).then((response) => response.json())
  }
}
