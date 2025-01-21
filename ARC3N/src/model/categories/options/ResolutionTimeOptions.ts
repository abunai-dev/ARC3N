import type { CategoryOption } from './CategoryOption'
import ResolutionTimeStaticData from './ResolutionTimeStaticData.json'

/** List of all options of the Category Resolution Time */
export enum ResolutionTimeOptionList {
  REQUIREMENTS_TIME = 'Requirements',
  DESIGN_TIME = 'Design',
  REALIZATION_TIME = 'Realization',
  RUNTIME = 'Runtime'
}

/** Map with detailed information about all options of the Category Resolution Time */
const resolutionTimeOptions = ResolutionTimeStaticData as Record<
  ResolutionTimeOptionList,
  CategoryOption
>
resolutionTimeOptions[ResolutionTimeOptionList.REQUIREMENTS_TIME].icon =
  'icon-resolution-requirements'
resolutionTimeOptions[ResolutionTimeOptionList.DESIGN_TIME].icon = 'icon-resolution-design'
resolutionTimeOptions[ResolutionTimeOptionList.REALIZATION_TIME].icon =
  'icon-resolution-realization'
resolutionTimeOptions[ResolutionTimeOptionList.RUNTIME].icon = 'icon-resolution-runtime'
export { resolutionTimeOptions }
