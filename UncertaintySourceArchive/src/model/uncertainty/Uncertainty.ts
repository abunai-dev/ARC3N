import type { CategoryList } from '../categories/Category'
import type { CategoryOptionList } from '../categories/options/CategoryOption'

/**
 * Basic information about an uncertainty
 */
export interface BaseUncertainty {
  id: number
  name: string
  classes: Record<CategoryList, CategoryOptionList>
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
