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
}

export type CategoryOptionList =
  | ArchitecturalElementTypeOptionList
  | ImpactOnConfidentialityOptionList
  | LocationOptionList
  | ManagabilityOptionList
  | ReducibleByAddOptionList
  | ResolutionTimeOptionList
  | SeverityOfTheImpactOptionList
  | TypeOptionList

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
