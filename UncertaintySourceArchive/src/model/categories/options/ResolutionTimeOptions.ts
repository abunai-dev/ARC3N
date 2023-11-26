import type { CategoryOption } from './CategoryOption'
import ResolutionTimeStaticData from './ResolutionTimeStaticData.json'

/**
 * List of all options of the Resolution Time Class
 */
export enum ResolutionTimeOptionList {
  REQUIREMENTS_TIME = 'Requirements',
  DESIGN_TIME = 'Design',
  REALITAION_TIME = 'Realization',
  RUNTIME = 'Runtime'
}

/**
 * Map of all options of the Resolution Time Class
 */
export const resolutionTimeOptions = ResolutionTimeStaticData as Record<
  ResolutionTimeOptionList,
  CategoryOption
>
