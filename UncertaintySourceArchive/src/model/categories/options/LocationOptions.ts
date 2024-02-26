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
locationOptions[LocationOptionList.STRUCTURE].icon = 'fa-diagram-project'
locationOptions[LocationOptionList.BEHAVIOR].icon = 'fa-gears'
locationOptions[LocationOptionList.ENVIRONMENT].icon = 'fa-earth-america'
locationOptions[LocationOptionList.INPUT].icon = 'fa-user'

locationOptions[LocationOptionList.STRUCTURE].color = colors.orange
locationOptions[LocationOptionList.BEHAVIOR].color = colors.blue
locationOptions[LocationOptionList.ENVIRONMENT].color = colors.lime
locationOptions[LocationOptionList.INPUT].color = colors.indigo

export { locationOptions }
