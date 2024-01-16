import type { CategoryOption } from './CategoryOption'
import ResolutionTimeStaticData from './ResolutionTimeStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Resolution Time */
export enum ResolutionTimeOptionList {
  REQUIREMENTS_TIME = 'Requirements',
  DESIGN_TIME = 'Design',
  REALITAION_TIME = 'Realization',
  RUNTIME = 'Runtime'
}

/** Map with detailed information about all options of the Category Resolution Time */
const resolutionTimeOptions = ResolutionTimeStaticData as Record<
  ResolutionTimeOptionList,
  CategoryOption
>
resolutionTimeOptions[ResolutionTimeOptionList.REQUIREMENTS_TIME].icon = 'fa-list'
resolutionTimeOptions[ResolutionTimeOptionList.DESIGN_TIME].icon = 'fa-pen'
resolutionTimeOptions[ResolutionTimeOptionList.REALITAION_TIME].icon = 'fa-cloud'
resolutionTimeOptions[ResolutionTimeOptionList.RUNTIME].icon = 'fa-clock'

resolutionTimeOptions[ResolutionTimeOptionList.REQUIREMENTS_TIME].color = colors.blue
resolutionTimeOptions[ResolutionTimeOptionList.DESIGN_TIME].color = colors.teal
resolutionTimeOptions[ResolutionTimeOptionList.REALITAION_TIME].color = colors.orange
resolutionTimeOptions[ResolutionTimeOptionList.RUNTIME].color = colors.fuchsia
export { resolutionTimeOptions }
