import {
  architecturalElementTypeClassOptions,
  type ArchitecturalElementTypeClassOptions
} from './ArchitecturalElementTypeClassOptions'
import {
  impactOnConfidentialityClassOptions,
  type ImpactOnConfidentialityClassOptions
} from './ImpactOnConfidentialityClassOptions'
import { locationClassOptions, type LocationClassOptions } from './LocationClassOptions'
import { managabilityClassOptions, type ManagabilityClassOptions } from './ManagabilityClassOption'
import {
  reducibleByAddClassOptions,
  type ReducibleByAddClassOptions
} from './ReducibleByAddClassOptions'
import {
  resolutionTimeClassOptions,
  type ResolutionTimeClassOptions
} from './ResolutionTimeClassOptions'
import {
  severityOfTheImpactClassOptions,
  type SeverityOfTheImpactClassOptions
} from './SeverityOfTheImpactClassOptions'
import { typeClassOptions, type TypeClassOptions } from './TypeClassOptions'

/**
 * Represents a value a class can have
 */
export interface ClassOption {
  name: string
  description: string
  example: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
}

export type ClassOptionEnumType =
  | ArchitecturalElementTypeClassOptions
  | ImpactOnConfidentialityClassOptions
  | LocationClassOptions
  | ManagabilityClassOptions
  | ReducibleByAddClassOptions
  | ResolutionTimeClassOptions
  | SeverityOfTheImpactClassOptions
  | TypeClassOptions

export const classOptions = {
  ...architecturalElementTypeClassOptions,
  ...impactOnConfidentialityClassOptions,
  ...locationClassOptions,
  ...managabilityClassOptions,
  ...reducibleByAddClassOptions,
  ...resolutionTimeClassOptions,
  ...severityOfTheImpactClassOptions,
  ...typeClassOptions
} as Record<ClassOptionEnumType, ClassOption>
