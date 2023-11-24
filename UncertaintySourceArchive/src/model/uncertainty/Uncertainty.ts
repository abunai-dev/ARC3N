import type { Classes } from '../classes/Class'
import type { ClassOptionEnumType } from '../classes/options/ClassOption'

/**
 * Basic information about an uncertainty
 */
export interface BaseUncertainty {
  id: number
  name: string
  classes: Record<Classes, ClassOptionEnumType>
  keywords: string[]
}

/**
 * Elaborated information about an uncertainty
 */
export interface Uncertainty extends BaseUncertainty {
  description: string
  exampleText: string
  exampleImages: string[]
  relatedUncertainties: BaseUncertainty[]
  children: BaseUncertainty[]
  parent?: BaseUncertainty
}
