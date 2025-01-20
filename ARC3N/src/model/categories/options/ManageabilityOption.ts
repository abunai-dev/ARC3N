import type { CategoryOption } from './CategoryOption'
import ManageabilityClassStaticData from './ManageabilityStaticData.json'

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
manageabilityOptions[ManageabilityOptionList.IRREDUCIBLE].icon = 'icon-manageability-irreducible'
manageabilityOptions[ManageabilityOptionList.PARTIALLY_REDUCIBLE].icon =
  'icon-manageability-partially'
manageabilityOptions[ManageabilityOptionList.FULLY_REDUCIBLE].icon = 'icon-manageability-fully'
export { manageabilityOptions }
