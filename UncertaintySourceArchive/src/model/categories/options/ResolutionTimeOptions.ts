import type { CategoryOption } from './CategoryOption'
import ResolutionTimeStaticData from './ResolutionTimeStaticData.json'

/** List of all options of the Category Resolution Time */
export enum ResolutionTimeOptionList {
  REQUIREMENTS_TIME = 'Requirements',
  DESIGN_TIME = 'Design',
  REALITAION_TIME = 'Realization',
  RUNTIME = 'Runtime'
}

/** Map with detailed information about all options of the Category Resolution Time */
export const resolutionTimeOptions = ResolutionTimeStaticData as Record<
  ResolutionTimeOptionList,
  CategoryOption
>
