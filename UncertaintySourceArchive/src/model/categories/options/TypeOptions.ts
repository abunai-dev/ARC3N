import type { CategoryOption } from './CategoryOption'
import TypeClassStaticData from './TypeStaticData.json'

/** List of all options of the Category Type */
export enum TypeOptionList {
  STATISTICAL_UNCERTAINTY = 'Statistical',
  SCENARIO_UNCERTAINTY = 'Scenario',
  RECOGNIZED_UNCERTAINTY = 'Recognized'
}

/** Map with detailed information about all options of the Category Type */
export const typeOptions = TypeClassStaticData as Record<TypeOptionList, CategoryOption>
