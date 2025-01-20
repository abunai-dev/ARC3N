import type { CategoryOption } from './CategoryOption'
import SeverityOfTheImpactClassStaticData from './SeverityOfTheImpactStaticData.json'

/** List of all options of the Category Severity of the Impact */
export enum SeverityOfTheImpactOptionList {
  HIGH = 'High',
  LOW = 'Low',
  NONE = 'severityNone'
}

/** Map with detailed information about all options of the Category Severity of the Impact */
const severityOfTheImpactOptions = SeverityOfTheImpactClassStaticData as Record<
  SeverityOfTheImpactOptionList,
  CategoryOption
>
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.HIGH].icon = 'icon-severity-high'
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.LOW].icon = 'icon-severity-low'
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.NONE].icon = 'icon-severity-none'
export { severityOfTheImpactOptions }
