import type { CategoryOption } from './CategoryOption'
import SeverityOfTheImpactClassStaticData from './SeverityOfTheImpactStaticData.json'

/**
 * List of all options of the Severity of the Impact Class
 */
export enum SeverityOfTheImpactOptionList {
  HIGH = 'High',
  LOW = 'Low',
  NONE = 'None'
}

/**
 * Map of all options of the Severity of the Impact Class
 */
export const severityOfTheImpactOptions = SeverityOfTheImpactClassStaticData as Record<
  SeverityOfTheImpactOptionList,
  CategoryOption
>
