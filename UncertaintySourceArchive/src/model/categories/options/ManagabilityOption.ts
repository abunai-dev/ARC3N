import type { CategoryOption } from './CategoryOption'
import ManagabilityClassStaticData from './ManagabilityStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Managability */
export enum ManagabilityOptionList {
  FULLY_REDUCIBLE = 'Fully',
  PARTIALLY_REDUCIBLE = 'Partially',
  IRRIDUCIBLE = 'Irriducible'
}

/** Map with detailed information about all options of the Category Managability */
const managabilityOptions = ManagabilityClassStaticData as Record<
  ManagabilityOptionList,
  CategoryOption
>
managabilityOptions[ManagabilityOptionList.IRRIDUCIBLE].icon = 'fa-lock'

managabilityOptions[ManagabilityOptionList.FULLY_REDUCIBLE].color = colors.green
managabilityOptions[ManagabilityOptionList.PARTIALLY_REDUCIBLE].color = colors.yellow
managabilityOptions[ManagabilityOptionList.IRRIDUCIBLE].color = colors.red
export { managabilityOptions }
