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
export const architecturalElementTypeOptions = ArchitecturalElementTypeStaticData as Record<
  ArchitecturalElementTypeOptionList,
  CategoryOption
>
