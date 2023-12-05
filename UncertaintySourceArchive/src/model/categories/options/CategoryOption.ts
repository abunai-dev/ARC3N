import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  architecturalElementTypeOptions,
  type ArchitecturalElementTypeOptionList
} from './ArchitecturalElementTypeOptions'
import {
  impactOnConfidentialityOptions,
  type ImpactOnConfidentialityOptionList
} from './ImpactOnConfidentialityOptions'
import { locationOptions, type LocationOptionList } from './LocationOptions'
import { managabilityOptions, type ManagabilityOptionList } from './ManagabilityOption'
import { reducibleByAddOptions, type ReducibleByAddOptionList } from './ReducibleByAddOptions'
import { resolutionTimeOptions, type ResolutionTimeOptionList } from './ResolutionTimeOptions'
import {
  severityOfTheImpactOptions,
  type SeverityOfTheImpactOptionList
} from './SeverityOfTheImpactOptions'
import { typeOptions, type TypeOptionList } from './TypeOptions'

/**
 * Represents a value a class can have
 */
export interface CategoryOption {
  name: string
  description: string
  exampleText: string
  /** need to be insertable into the src of an img html tag */
  exampleImages: string[]
  icon?: IconDefinition
}

/** List of all possible values of options of any category can have */
export type CategoryOptionList =
  | ArchitecturalElementTypeOptionList
  | ImpactOnConfidentialityOptionList
  | LocationOptionList
  | ManagabilityOptionList
  | ReducibleByAddOptionList
  | ResolutionTimeOptionList
  | SeverityOfTheImpactOptionList
  | TypeOptionList

/** Map with detailed information about all options in the classification */
export const categoryOptions = {
  ...architecturalElementTypeOptions,
  ...impactOnConfidentialityOptions,
  ...locationOptions,
  ...managabilityOptions,
  ...reducibleByAddOptions,
  ...resolutionTimeOptions,
  ...severityOfTheImpactOptions,
  ...typeOptions
} as Record<CategoryOptionList, CategoryOption>
