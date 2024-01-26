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
managabilityOptions[ManagabilityOptionList.IRRIDUCIBLE].icon = 'fa-hand'
managabilityOptions[ManagabilityOptionList.PARTIALLY_REDUCIBLE].icon = 'fa-sliders'
managabilityOptions[ManagabilityOptionList.FULLY_REDUCIBLE].icon = 'fa-wand-magic-sparkles'

managabilityOptions[ManagabilityOptionList.FULLY_REDUCIBLE].color = colors.emerald
managabilityOptions[ManagabilityOptionList.PARTIALLY_REDUCIBLE].color = colors.cyan
managabilityOptions[ManagabilityOptionList.IRRIDUCIBLE].color = colors.pink
export { managabilityOptions }
