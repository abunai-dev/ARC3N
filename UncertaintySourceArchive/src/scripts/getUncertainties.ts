import { IssueResourceGetter } from '../model/resourceGetter/IssueResourceGetter'
import { writeFileSync } from 'fs'

async function main() {
  const issues = await new IssueResourceGetter().getAll()
  const json = JSON.stringify(issues)
  writeFileSync('../../public/data.json', json)
}

main()
