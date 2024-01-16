import type { CategoryOption } from './CategoryOption'
import TypeClassStaticData from './TypeStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Type */
export enum TypeOptionList {
  STATISTICAL_UNCERTAINTY = 'Statistical',
  SCENARIO_UNCERTAINTY = 'Scenario',
  RECOGNIZED_UNCERTAINTY = 'Recognized'
}

/** Map with detailed information about all options of the Category Type */
const typeOptions = TypeClassStaticData as Record<TypeOptionList, CategoryOption>
typeOptions[TypeOptionList.STATISTICAL_UNCERTAINTY].icon = 'fa-chart-pie-simple'
typeOptions[TypeOptionList.RECOGNIZED_UNCERTAINTY].icon = 'fa-shield-exclamation'

typeOptions[TypeOptionList.STATISTICAL_UNCERTAINTY].color = colors.green
typeOptions[TypeOptionList.SCENARIO_UNCERTAINTY].color = colors.yellow
typeOptions[TypeOptionList.RECOGNIZED_UNCERTAINTY].color = colors.red
export { typeOptions }
