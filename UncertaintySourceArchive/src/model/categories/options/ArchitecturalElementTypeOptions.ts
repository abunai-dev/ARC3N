import type { CategoryOption } from './CategoryOption'
import ArchitecturalElementTypeStaticData from './ArchitecturalElementTypeStaticData.json'

/**
 * List of all options of the Architectural Element Type Class
 */
export enum ArchitecturalElementTypeOptionList {
  COMPONENT = 'Component',
  CONNECTOR = 'Connector',
  INTERFACE = 'Interface',
  EXTERNAL_RESOURCE = 'External',
  BEHAIOUR_DESCRIPTION = 'Behaviour'
}

/**
 * Map of all options of the Architectural Element Type Class
 */
export const architecturalElementTypeOptions = ArchitecturalElementTypeStaticData as Record<
  ArchitecturalElementTypeOptionList,
  CategoryOption
>
