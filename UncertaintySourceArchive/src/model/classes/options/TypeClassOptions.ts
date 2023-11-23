import type { ClassOption } from './ClassOption'
import TypeClassStaticData from './TypeStaticData.json'

/**
 * List of all options of the Type Class
 */
export enum TypeClassOptions {
  STATISTICAL_UNCERTAINTY = 'Statistical',
  SCENARIO_UNCERTAINTY = 'Scenario',
  RECOGNIZED_UNCERTAINTY = 'Recognized'
}

/**
 * Map of all options of the Type Class
 */
export const typeClassOptions = TypeClassStaticData as Record<TypeClassOptions, ClassOption>
