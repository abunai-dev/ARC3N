import { CategoryList } from '../categories/Category'
import type { CategoryOptionList } from '../categories/options/CategoryOption'

/**
 * Filter for uncertainties
 * An empty array means that the filter is not applied to the class
 * If no value is set for a class, the filter is not applied to that class
 */
export type Filter = Partial<Record<CategoryList, CategoryOptionList[]>>

/**
 * Sorting for uncertainties
 */
export type Sorting = {
  field: 'none' | 'id' | 'keywords' | 'name' | CategoryList
  direction: 'ascending' | 'descending'
}

/**
 * Columns for the table
 */
export type Columns = CategoryList | 'id' | 'keywords' | 'name'
