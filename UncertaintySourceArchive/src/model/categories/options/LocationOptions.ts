import type { CategoryOption } from './CategoryOption'
import LocationStaticData from './LocationStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Location */
export enum LocationOptionList {
  STRUCTURE = 'Structure',
  BEHAVIOR = 'Behavior',
  ENVIRONMENT = 'Environment',
  INPUT = 'Input'
}

/** Map with detailed information about all options of the Category Location */
const locationOptions = LocationStaticData as Record<LocationOptionList, CategoryOption>
locationOptions[LocationOptionList.STRUCTURE].icon = 'fa-building'
locationOptions[LocationOptionList.BEHAVIOR].icon = 'fa-gear'
locationOptions[LocationOptionList.ENVIRONMENT].icon = 'fa-earth-america'
locationOptions[LocationOptionList.INPUT].icon = 'fa-keyboard'

locationOptions[LocationOptionList.STRUCTURE].color = colors.orange
locationOptions[LocationOptionList.BEHAVIOR].color = colors.blue
locationOptions[LocationOptionList.ENVIRONMENT].color = colors.teal
locationOptions[LocationOptionList.INPUT].color = colors.fuchsia

export { locationOptions }
