import { IssueResourceGetter } from '../model/resourceGetter/IssueResourceGetter'

export async function main() {
  const issues = await new IssueResourceGetter().getAll()
  const json = JSON.stringify(issues)
  return json
}
