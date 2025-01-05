import type { CategoryOption } from './CategoryOption'
import ArchitecturalElementTypeStaticData from './ArchitecturalElementTypeStaticData.json'
import colors from 'tailwindcss/colors'

/** List of all options of the Category Architectural Element Type */
export enum ArchitecturalElementTypeOptionList {
  COMPONENT = 'Component',
  CONNECTOR = 'Connector',
  INTERFACE = 'Interface',
  EXTERNAL_RESOURCE = 'External',
  BEHAVIOR_DESCRIPTION = 'Behavior'
}

/** Map with detailed information about all options of the Category Architectural Element Type */
const architecturalElementTypeOptions = ArchitecturalElementTypeStaticData as Record<
  ArchitecturalElementTypeOptionList,
  CategoryOption
>
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.COMPONENT].icon =
  'fa-puzzle-piece'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.COMPONENT].icon =
  'fa-puzzle-piece'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.CONNECTOR].icon = 'fa-link'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.INTERFACE].icon = 'fa-webhook'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE].icon =
  'fa-arrow-up-right-from-square'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.BEHAVIOR_DESCRIPTION].icon =
  'fa-gear'

architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.COMPONENT].color = colors.orange
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.CONNECTOR].color = colors.teal
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.INTERFACE].color = colors.amber
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE].color =
  colors.rose
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.BEHAVIOR_DESCRIPTION].color =
  colors.sky
export { architecturalElementTypeOptions }
