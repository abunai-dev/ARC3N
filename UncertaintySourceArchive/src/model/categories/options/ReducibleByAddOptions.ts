import type { CategoryOption } from './CategoryOption'
import ReducibleByAddStaticData from './ReducibleByAddStaticData.json'

/**
 * List of all options of the Reducible by Add Class
 */
export enum ReducibleByAddOptionList {
  YES = 'Yes',
  NO = 'No'
}

/**
 * Map of all options of the Reducible by Add Class
 */
export const reducibleByAddOptions = ReducibleByAddStaticData as Record<
  ReducibleByAddOptionList,
  CategoryOption
>
