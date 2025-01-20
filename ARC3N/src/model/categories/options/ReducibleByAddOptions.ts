import type { CategoryOption } from './CategoryOption'
import ReducibleByAddStaticData from './ReducibleByAddStaticData.json'

/** List of all options of the Category Reducible by Add */
export enum ReducibleByAddOptionList {
  YES = 'Yes',
  NO = 'No'
}

/** Map with detailed information about all options of the Category Reducible by Add */
const reducibleByAddOptions = ReducibleByAddStaticData as Record<
  ReducibleByAddOptionList,
  CategoryOption
>
reducibleByAddOptions[ReducibleByAddOptionList.YES].icon = 'icon-reducible-yes'
reducibleByAddOptions[ReducibleByAddOptionList.NO].icon = 'icon-reducible-no'
export { reducibleByAddOptions }
