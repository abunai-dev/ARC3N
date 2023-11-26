import type { CategoryOption } from './CategoryOption'
import SeverityOfTheImpactClassStaticData from './SeverityOfTheImpactStaticData.json'

/** List of all options of the Category Severity of the Impact */
export enum SeverityOfTheImpactOptionList {
  HIGH = 'High',
  LOW = 'Low',
  NONE = 'None'
}

/** Map with detailed information about all options of the Category Severity of the Impact */
export const severityOfTheImpactOptions = SeverityOfTheImpactClassStaticData as Record<
  SeverityOfTheImpactOptionList,
  CategoryOption
>
