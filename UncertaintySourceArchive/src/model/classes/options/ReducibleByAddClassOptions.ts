import type { ClassOption } from './ClassOption'
import ReducibleByAddStaticData from './ReducibleByAddStaticData.json'

/**
 * List of all options of the Reducible by Add Class
 */
export enum ReducibleByAddClassOptions {
  YES = 'Yes',
  NO = 'No'
}

/**
 * Map of all options of the Reducible by Add Class
 */
export const reducibleByAddClassOptions = ReducibleByAddStaticData as Record<
  ReducibleByAddClassOptions,
  ClassOption
>
