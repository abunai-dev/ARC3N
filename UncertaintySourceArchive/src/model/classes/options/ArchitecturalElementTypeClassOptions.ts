import type { ClassOption } from './ClassOption'

/**
 * List of all options of the Architectural Element Type Class
 */
export enum ArchitecturalElementTypeClassOptions {
  COMPONENT = 'Component',
  CONNECTOR = 'Connector',
  INTERFACE = 'Interface',
  EXTERNAL_RESOURCE = 'External',
  BEHAIOUR_DESCRIPTION = 'Behaviour'
}

/**
 * Map of all options of the Architectural Element Type Class
 */
export const architecturalElementTypeClassOptions = {} as Record<
  ArchitecturalElementTypeClassOptions,
  ClassOption
>
