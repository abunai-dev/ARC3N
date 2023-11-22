import type { ClassOption } from './ClassOption'

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
export const impactOnConfidentialityClassOptions = {} as Record<
  ImpactOnConfidentialityClassOptions,
  ClassOption
>
