import type { ClassOption } from './ClassOption'

/**
 * List of all options of the Location Class
 */
export enum LocationClassOptions {
  STRUCTURE = 'Structure',
  BEHAVIOR = 'Behavior',
  ENVIRONMENT = 'Environment',
  INPUT = 'Input'
}

/**
 * Map of all options of the Location Class
 */
export const locationClassOptions = {} as Record<LocationClassOptions, ClassOption>
