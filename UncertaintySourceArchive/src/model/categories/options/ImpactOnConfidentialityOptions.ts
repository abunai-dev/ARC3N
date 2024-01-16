import type { CategoryOption } from './CategoryOption'
import ImpactOnConfidentialityStaticData from './ImpactOnConfidentialityStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Impact on Confidentiality */
export enum ImpactOnConfidentialityOptionList {
  DIRECT = 'Direct',
  INDIRECT = 'Indirect',
  NONE = 'impactNone'
}

/** Map with detailed detailed information all options of the Category Impact on Confidentiality */
const impactOnConfidentialityOptions = ImpactOnConfidentialityStaticData as Record<
  ImpactOnConfidentialityOptionList,
  CategoryOption
>
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.DIRECT].icon = 'fa-shield-keyhole'
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.NONE].icon = 'fa-shield'

impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.DIRECT].color = colors.red
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.INDIRECT].color = colors.yellow
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.NONE].color = colors.green
export { impactOnConfidentialityOptions }
