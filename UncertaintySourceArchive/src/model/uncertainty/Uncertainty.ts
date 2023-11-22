import type { ClassOption } from '../classes/options/ClassOption'

/**
 * Basic information about an uncertainty
 */
export interface BaseUncertainty {
  id: number
  name: string
  classes: Record<string, ClassOption>
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

