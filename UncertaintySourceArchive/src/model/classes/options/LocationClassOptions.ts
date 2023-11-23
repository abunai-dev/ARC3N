import type { ClassOption } from './ClassOption'
import LocationStaticData from './LocationStaticData.json'

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
export const locationClassOptions = LocationStaticData as Record<LocationClassOptions, ClassOption>
