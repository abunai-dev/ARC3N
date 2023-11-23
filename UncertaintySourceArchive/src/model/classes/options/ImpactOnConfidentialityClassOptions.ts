import type { ClassOption } from './ClassOption'
import ImpactOnConfidentialityStaticData from './ImpactOnConfidentialityStaticData.json'

/**
 * List of all options of the Impact on Confidentiality Class
 */
export enum ImpactOnConfidentialityClassOptions {
  DIRECT = 'Direct',
  INDIRECT = 'Indirect',
  NONE = 'None'
}

/**
 * Map of all options of the Impact on Confidentiality Class
 */
export const impactOnConfidentialityClassOptions = ImpactOnConfidentialityStaticData as Record<
  ImpactOnConfidentialityClassOptions,
  ClassOption
>
