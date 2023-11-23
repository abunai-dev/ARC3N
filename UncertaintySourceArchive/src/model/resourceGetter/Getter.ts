import { JsonResourceGetter } from './JsonResourceGetter'
import { IssueResourceGetter } from './IssueResourceGetter'
import type { ResourceGetter } from './ResourceGetter'

const resourceGetter: ResourceGetter =
  import.meta.env.MODE == 'dev' ? new JsonResourceGetter() : new IssueResourceGetter()

export { resourceGetter }
