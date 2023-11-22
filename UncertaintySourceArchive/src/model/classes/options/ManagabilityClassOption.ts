import type { ClassOption } from './ClassOption'

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
export const managabilityClassOptions = {} as Record<ManagabilityClassOptions, ClassOption>
