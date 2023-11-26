import type { CategoryOption } from './CategoryOption'
import LocationStaticData from './LocationStaticData.json'

/** List of all options of the Category Location */
export enum LocationOptionList {
  STRUCTURE = 'Structure',
  BEHAVIOR = 'Behavior',
  ENVIRONMENT = 'Environment',
  INPUT = 'Input'
}

/** Map with detailed information about all options of the Category Location */
export const locationOptions = LocationStaticData as Record<LocationOptionList, CategoryOption>
