import type { ClassOption } from './ClassOption'

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
export const typeClassOptions = {} as Record<TypeClassOptions, ClassOption>
