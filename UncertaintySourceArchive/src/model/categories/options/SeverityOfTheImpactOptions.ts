import type { CategoryOption } from './CategoryOption'
import SeverityOfTheImpactClassStaticData from './SeverityOfTheImpactStaticData.json'
import colors from 'tailwindcss/colors'

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
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.HIGH].icon = 'fa-circle-exclamation'
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.LOW].icon = 'fa-circle-question'
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.NONE].icon = 'fa-circle'

severityOfTheImpactOptions[SeverityOfTheImpactOptionList.HIGH].color = colors.red
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.LOW].color = colors.yellow
severityOfTheImpactOptions[SeverityOfTheImpactOptionList.NONE].color = colors.green

export { severityOfTheImpactOptions }
