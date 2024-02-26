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
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.DIRECT].icon =
  'fa-shield-exclamation'
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.INDIRECT].icon = 'fa-shield-halved'
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.NONE].icon = 'fa-shield-check'

impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.DIRECT].color = colors.rose
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.INDIRECT].color = colors.amber
impactOnConfidentialityOptions[ImpactOnConfidentialityOptionList.NONE].color = colors.stone
export { impactOnConfidentialityOptions }
