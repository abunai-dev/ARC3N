import type { BaseUncertainty, Uncertainty } from '../uncertainty/Uncertainty'
import { ResourceGetter } from './ResourceGetter'
import { BaseUncertaintyIssueParser } from './parser/BaseUncertaintyIssueParser'

/**
 * Gets uncertainties from GitHub issues
 */
export class IssueResourceGetter extends ResourceGetter {
  private static readonly BASE_URL = 'https://api.github.com'
  private static readonly OWNER = 'abunai-dev'
  private static readonly REPO = 'UncertaintySourceArchive'
  private static readonly ISSUES_PER_SITE = 100
  private static readonly ISSUE_LABEL = 'Verified'

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

  public getPerPageAmount(): number {
    return IssueResourceGetter.ISSUES_PER_SITE
  }

  public async getList(page: number): Promise<BaseUncertainty[]> {
    const issueIds = await this.getIssueList(page).then((data) =>
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

  private async getIssueList(page: number): Promise<any[]> {
    return await fetch(
      `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues?labels=${IssueResourceGetter.ISSUE_LABEL}&state=open&per_page=${IssueResourceGetter.ISSUES_PER_SITE}&page=${page}`
    ).then((response) => response.json())
  }

  private async getIssue(id: number): Promise<any> {
    return await fetch(
      `${IssueResourceGetter.BASE_URL}/repos/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues/${id}`
    ).then((response) => response.json())
  }
}
