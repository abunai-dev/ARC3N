import type { CategoryOption } from './CategoryOption'
import LocationStaticData from './LocationStaticData.json'

/**
 * List of all options of the Location Class
 */
export enum LocationOptionList {
  STRUCTURE = 'Structure',
  BEHAVIOR = 'Behavior',
  ENVIRONMENT = 'Environment',
  INPUT = 'Input'
}

/**
 * Map of all options of the Location Class
 */
export const locationOptions = LocationStaticData as Record<LocationOptionList, CategoryOption>
