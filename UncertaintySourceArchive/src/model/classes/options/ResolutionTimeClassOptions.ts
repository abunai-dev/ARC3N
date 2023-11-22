import type { ClassOption } from './ClassOption'

/**
 * List of all options of the Resolution Time Class
 */
export enum ResolutionTimeClassOptions {
  REQUIREMENTS_TIME = 'Requirements',
  DESIGN_TIME = 'Design',
  REALITAION_TIME = 'Realization',
  RUNTIME = 'Runtime'
}

/**
 * Map of all options of the Resolution Time Class
 */
export const resolutionTimeClassOptions = {} as Record<ResolutionTimeClassOptions, ClassOption>
