import type { CategoryOption } from './CategoryOption'
import ImpactOnConfidentialityStaticData from './ImpactOnConfidentialityStaticData.json'

/** List of all options of the Category Impact on Confidentiality */
export enum ImpactOnConfidentialityOptionList {
  DIRECT = 'Direct',
  INDIRECT = 'Indirect',
  NONE = 'None'
}

/** Map with detailed detailed information all options of the Category Impact on Confidentiality */
export const impactOnConfidentialityOptions = ImpactOnConfidentialityStaticData as Record<
  ImpactOnConfidentialityOptionList,
  CategoryOption
>
