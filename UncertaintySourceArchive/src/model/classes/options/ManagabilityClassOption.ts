import type { ClassOption } from './ClassOption'
import ManagabilityClassStaticData from './ManagabilityStaticData.json'

/**
 * List of all options of the Managability Class
 */
export enum ManagabilityClassOptions {
  FULLY_REDUCIBLE = 'Fully',
  PARTIALLY_REDUCIBLE = 'Partially',
  IRRIDUCIBLE = 'Irriducible'
}

/**
 * Map of all options of the Managability Class
 */
export const managabilityClassOptions = ManagabilityClassStaticData as Record<
  ManagabilityClassOptions,
  ClassOption
>
