import type { CategoryOption } from './CategoryOption'
import ImpactOnConfidentialityStaticData from './ImpactOnConfidentialityStaticData.json'

/**
 * List of all options of the Impact on Confidentiality Class
 */
export enum ImpactOnConfidentialityOptionList {
  DIRECT = 'Direct',
  INDIRECT = 'Indirect',
  NONE = 'None'
}

/**
 * Map of all options of the Impact on Confidentiality Class
 */
export const impactOnConfidentialityOptions = ImpactOnConfidentialityStaticData as Record<
  ImpactOnConfidentialityOptionList,
  CategoryOption
>
