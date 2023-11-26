<template>Table Incoming</template>

<script setup lang="ts">
import type { Uncertainty } from '@/model/uncertainty/Uncertainty'
import { ref, type PropType, type Ref, computed } from 'vue'
import type { Filter, Sorting, Columns } from '@/model/ui/Table'
import { categoryOrder, CategoryList, categories } from '@/model/categories/Category'
import { categoryOptions, type CategoryOptionList } from '@/model/categories/options/CategoryOption'

const props = defineProps({
  searchString: {
    type: String,
    required: false,
    default: ''
  },
  filter: {
    type: Object as PropType<Filter>,
    required: false,
    default: () => {
      return {}
    }
  },
  sorting: {
    type: Object as PropType<Sorting>,
    required: false,
    default: () => {
      return {
        field: 'none',
        direction: 'ascending'
      }
    }
  },
  shownColumns: {
    type: Array as PropType<Columns[]>,
    required: false,
    default: () => {
      return [
        CategoryList.ARCHITECTURAL_ELEMENT_TYPE,
        CategoryList.IMPACT_ON_CONFIDENTIALITY,
        CategoryList.LOCATION,
        CategoryList.MANAGABILITY,
        CategoryList.REDUCIBLE_BY_ADD,
        CategoryList.RESOLUTION_TIME,
        CategoryList.SEVERITY_OF_IMPACT,
        CategoryList.TYPE,
        'name',
        'id',
        'keywords'
      ]
    }
  }
})

const uncertainties: Ref<Uncertainty[]> = ref([])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const filteredUncertainties = computed(() => {
  return uncertainties.value
    .filter(matchesFilter)
    .filter(matchesSearchString)
    .sort(uncertaintyComparator)
})

/**
 * Predicate to check if an uncertainty matches the filter
 * @param uncertainty Uncertainty to check
 */
function matchesFilter(uncertainty: Uncertainty): boolean {
  return categoryOrder.every((c: CategoryList) => {
    const f = props.filter[c]
    return f == undefined || f.length == 0 || f.includes(uncertainty.classes[c])
  })
}

const searcheStringParts = computed(() =>
  props.searchString
    .trimEnd()
    .toLowerCase()
    .split(/ +/g)
    .map((s) => s.trim().replace(/,/g, ''))
)

/**
 * Predicate to check if an uncertainty matches the search string
 * @param uncertainty Uncertainty to check
 */
function matchesSearchString(uncertainty: Uncertainty): boolean {
  if (searcheStringParts.value.length == 0) {
    return true
  }
  return searcheStringParts.value.some((part) => {
    if (uncertainty.name.toLowerCase().includes(part) || uncertainty.id.toString().includes(part)) {
      return true
    }
    for (let keyword in uncertainty.keywords) {
      if (keyword.toLowerCase().includes(part)) {
        return true
      }
    }
    for (let c of categoryOrder) {
      if (categoryOptions[uncertainty.classes[c]].name.toLowerCase().includes(part)) {
        return true
      }
    }
    return false
  })
}

const sortingDirection = computed(() => (props.sorting.direction == 'ascending' ? 1 : -1))

/**
 * Comparator for uncertainties. Uses the sorting field and direction from props.
 * @param a Left uncertainty
 * @param b Right uncertainty
 */
function uncertaintyComparator(a: Uncertainty, b: Uncertainty): number {
  if (props.sorting.field == 'none') {
    return a.id - b.id
  } else if (props.sorting.field == 'name') {
    return sortingDirection.value * a.name.localeCompare(b.name)
  } else if (props.sorting.field == 'id') {
    return sortingDirection.value * (a.id - b.id)
  } else if (props.sorting.field == 'keywords') {
    const aKeywords = Object.keys(a.keywords).sort()
    const bKeywords = Object.keys(b.keywords).sort()
    for (let i = 0; i < Math.min(aKeywords.length, bKeywords.length); i++) {
      const result = sortingDirection.value * aKeywords[i].localeCompare(bKeywords[i])
      if (result != 0) {
        return result
      }
    }
    return sortingDirection.value * (aKeywords.length - bKeywords.length)
  } else {
    const indexA = (categories[props.sorting.field].options as CategoryOptionList[]).indexOf(
      a.classes[props.sorting.field]
    )
    const indexB = (categories[props.sorting.field].options as CategoryOptionList[]).indexOf(
      b.classes[props.sorting.field]
    )

    if (indexA == indexB) {
      return 0
    }
    if (indexA == -1) {
      return sortingDirection.value
    }
    if (indexB == -1) {
      return sortingDirection.value * -1
    }
    return sortingDirection.value * (indexA - indexB)
  }
}
</script>
