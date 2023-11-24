import { Classes } from '../classes/Class'
import type { ClassOptionEnumType } from '../classes/options/ClassOption'

/**
 * Filter for uncertainties
 * An empty array means that the filter is not applied to the class
 * If no value is set for a class, the filter is not applied to that class
 */
export type Filter = Partial<Record<Classes, ClassOptionEnumType[]>>

/**
 * Sorting for uncertainties
 */
export type Sorting = {
  field: 'none' | 'id' | 'keywords' | 'name' | Classes
  direction: 'ascending' | 'descending'
}

/**
 * Columns for the table
 */
export type Columns = Classes | 'id' | 'keywords' | 'name'
