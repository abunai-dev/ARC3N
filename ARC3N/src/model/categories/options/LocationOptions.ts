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
const locationOptions = LocationStaticData as Record<LocationOptionList, CategoryOption>
locationOptions[LocationOptionList.STRUCTURE].icon = 'icon-location-structure'
locationOptions[LocationOptionList.BEHAVIOR].icon = 'icon-location-behavior'
locationOptions[LocationOptionList.ENVIRONMENT].icon = 'icon-location-environment'
locationOptions[LocationOptionList.INPUT].icon = 'icon-location-input'
export { locationOptions }
