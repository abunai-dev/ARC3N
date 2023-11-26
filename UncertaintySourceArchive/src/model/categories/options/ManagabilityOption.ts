import type { CategoryOption } from './CategoryOption'
import ManagabilityClassStaticData from './ManagabilityStaticData.json'

/** List of all options of the Category Managability */
export enum ManagabilityOptionList {
  FULLY_REDUCIBLE = 'Fully',
  PARTIALLY_REDUCIBLE = 'Partially',
  IRRIDUCIBLE = 'Irriducible'
}

/** Map with detailed information about all options of the Category Managability */
export const managabilityOptions = ManagabilityClassStaticData as Record<
  ManagabilityOptionList,
  CategoryOption
>
