import type { CategoryOption } from './CategoryOption'
import ManageabilityClassStaticData from './ManageabilityStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Managability */
export enum ManageabilityOptionList {
  FULLY_REDUCIBLE = 'Fully',
  PARTIALLY_REDUCIBLE = 'Partially',
  IRREDUCIBLE = 'Irreducible'
}

/** Map with detailed information about all options of the Category Managability */
const manageabilityOptions = ManageabilityClassStaticData as Record<
  ManageabilityOptionList,
  CategoryOption
>
manageabilityOptions[ManageabilityOptionList.IRREDUCIBLE].icon = 'fa-hand'
manageabilityOptions[ManageabilityOptionList.PARTIALLY_REDUCIBLE].icon = 'fa-sliders'
manageabilityOptions[ManageabilityOptionList.FULLY_REDUCIBLE].icon = 'fa-wand-magic-sparkles'

manageabilityOptions[ManageabilityOptionList.FULLY_REDUCIBLE].color = colors.emerald
manageabilityOptions[ManageabilityOptionList.PARTIALLY_REDUCIBLE].color = colors.cyan
manageabilityOptions[ManageabilityOptionList.IRREDUCIBLE].color = colors.pink
export { manageabilityOptions }
