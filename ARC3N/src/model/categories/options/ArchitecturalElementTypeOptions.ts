import type { CategoryOption } from './CategoryOption'
import ArchitecturalElementTypeStaticData from './ArchitecturalElementTypeStaticData.json'

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
  'icon-architectural-component'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.CONNECTOR].icon =
  'icon-architectural-connector'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.INTERFACE].icon =
  'icon-architectural-interface'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE].icon =
  'icon-architectural-external'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.BEHAVIOR_DESCRIPTION].icon =
  'icon-architectural-behavior'
export { architecturalElementTypeOptions }
