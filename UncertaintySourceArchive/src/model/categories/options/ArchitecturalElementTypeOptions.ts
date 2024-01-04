import type { CategoryOption } from './CategoryOption'
import ArchitecturalElementTypeStaticData from './ArchitecturalElementTypeStaticData.json'

/** List of all options of the Category Architectural Element Type */
export enum ArchitecturalElementTypeOptionList {
  COMPONENT = 'Component',
  CONNECTOR = 'Connector',
  INTERFACE = 'Interface',
  EXTERNAL_RESOURCE = 'External',
  BEHAIOUR_DESCRIPTION = 'Behaviour'
}

/** Map with detailed information about all options of the Category Architectural Element Type */
const architecturalElementTypeOptions = ArchitecturalElementTypeStaticData as Record<
  ArchitecturalElementTypeOptionList,
  CategoryOption
>
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.COMPONENT].icon =
  'fa-puzzle-piece'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.CONNECTOR].icon = 'fa-link'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.INTERFACE].icon = 'fa-webhook'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.EXTERNAL_RESOURCE].icon =
  'fa-server'
architecturalElementTypeOptions[ArchitecturalElementTypeOptionList.BEHAIOUR_DESCRIPTION].icon =
  'fa-computer-mouse'
export { architecturalElementTypeOptions }