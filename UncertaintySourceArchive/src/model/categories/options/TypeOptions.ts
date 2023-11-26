import type { CategoryOption } from './CategoryOption'
import TypeClassStaticData from './TypeStaticData.json'

/**
 * List of all options of the Type Class
 */
export enum TypeOptionList {
  STATISTICAL_UNCERTAINTY = 'Statistical',
  SCENARIO_UNCERTAINTY = 'Scenario',
  RECOGNIZED_UNCERTAINTY = 'Recognized'
}

/**
 * Map of all options of the Type Class
 */
export const typeOptions = TypeClassStaticData as Record<TypeOptionList, CategoryOption>
