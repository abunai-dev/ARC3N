<template>
  <div>
    <div class="table w-full">
      <div class="table-row">
        <div
          v-for="col in shownColumns"
          :key="col"
          class="table-cell max-h-fit cursor-pointer border-b border-gray-400 text-center"
          @click="changeSorting(col)"
        >
          <div class="flex h-full items-center space-x-1 px-1">
            <div class="h-full grow">
              {{ columnNames[col].name }}
            </div>
            <div>
              <FontAwesomeIcon :icon="getSortingIcon(col)" class="text-xs" />
            </div>
          </div>
        </div>
      </div>
      <RouterLink
        v-for="[index, uncertainty] in filteredUncertainties.entries()"
        :key="uncertainty.id"
        :class="{ 'bg-black bg-opacity-10 dark:bg-opacity-30': index % 2 == 1 }"
        :to="{
          name: 'uncertainty',
          params: { id: uncertainty.id.toString() }
        }"
        class="table-row"
      >
        <div
          v-for="col in shownColumns"
          :key="col"
          :class="{ 'text-center': col != 'id' }"
          class="table-cell"
        >
          {{ getDisplayValue(uncertainty, col) }}
        </div>
      </RouterLink>
    </div>
    <div v-if="uncertainties.length < uncertaintyCount" class="w-full pt-2 text-center font-bold">
      Loading more...
    </div>
    <div v-if="filteredUncertainties.length == 0" class="w-full pt-2 text-center font-bold">
      No uncertainties fit filter/search
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseUncertainty } from '@/model/uncertainty/Uncertainty'
import { ref, type PropType, type Ref, computed } from 'vue'
import type { Filter, Sorting, Columns } from '@/model/ui/Table'
import { categoryOrder, CategoryList, categories } from '@/model/categories/Category'
import { categoryOptions, type CategoryOptionList } from '@/model/categories/options/CategoryOption'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSortUp, faSortDown, faSort } from '@fortawesome/free-solid-svg-icons'
import { RouterLink } from 'vue-router'
import { JsonResourceGetter } from '@/model/resourceGetter/JsonResourceGetter'

const resourceGetter = new JsonResourceGetter()
library.add(faSortUp, faSortDown, faSort)

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
  shownColumns: {
    type: Array as PropType<Columns[]>,
    required: false,
    default: () => {
      return ['id', 'name', 'keywords', ...categoryOrder]
    }
  }
})

const columnNames: Record<Columns, { name: string }> = {
  ...categories,
  name: { name: 'Name' },
  id: { name: 'ID' },
  keywords: { name: 'Keywords' }
}

function getDisplayValue(uncertainty: BaseUncertainty, column: Columns): string {
  if (column == 'name') {
    return uncertainty.name
  } else if (column == 'id') {
    return uncertainty.id.toString()
  } else if (column == 'keywords') {
    return Object.keys(uncertainty.keywords).sort().join(', ')
  } else {
    return categoryOptions[uncertainty.classes[column]].name
  }
}

const sorting = ref<Sorting>({
  field: 'none',
  direction: 'ascending'
})

function getSortingIcon(column: Columns): string {
  if (sorting.value.field == column) {
    if (sorting.value.direction == 'ascending') {
      return 'sort-up'
    } else {
      return 'sort-down'
    }
  } else {
    return 'sort'
  }
}

function changeSorting(column: Columns): void {
  if (sorting.value.field == column) {
    if (sorting.value.direction == 'ascending') {
      sorting.value.direction = 'descending'
    } else {
      sorting.value.field = 'none'
    }
  } else {
    sorting.value.field = column
    sorting.value.direction = 'ascending'
  }
}

const uncertainties: Ref<BaseUncertainty[]> = ref([])
const uncertaintyCount = ref(0)

async function getUncertainties() {
  uncertaintyCount.value = await resourceGetter.getUncertaintyCount()

  function getUncertaintiesHelper(page: number): void {
    if (page > uncertaintyCount.value / resourceGetter.getDefaultPerPageAmount()) {
      return
    }
    resourceGetter.getPage(page).then((data) => {
      uncertainties.value = uncertainties.value.concat(data)
    })
  }
  getUncertaintiesHelper(1)
}
getUncertainties()

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
function matchesFilter(uncertainty: BaseUncertainty): boolean {
  return categoryOrder.every((c: CategoryList) => {
    const f = props.filter[c]
    return f == undefined || f.length == 0 || f.includes(uncertainty.classes[c])
  })
}

const searchStringParts = computed(() =>
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
function matchesSearchString(uncertainty: BaseUncertainty): boolean {
  if (searchStringParts.value.length == 0) {
    return true
  }
  return searchStringParts.value.some((part) => {
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

const sortingDirection = computed(() => (sorting.value.direction == 'ascending' ? 1 : -1))

/**
 * Comparator for uncertainties. Uses the sorting field and direction from props.
 * @param a Left uncertainty
 * @param b Right uncertainty
 */
function uncertaintyComparator(a: BaseUncertainty, b: BaseUncertainty): number {
  if (sorting.value.field == 'none') {
    return a.id - b.id
  } else if (sorting.value.field == 'name') {
    return sortingDirection.value * a.name.localeCompare(b.name)
  } else if (sorting.value.field == 'id') {
    return sortingDirection.value * (a.id - b.id)
  } else if (sorting.value.field == 'keywords') {
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
    const indexA = (categories[sorting.value.field].options as CategoryOptionList[]).indexOf(
      a.classes[sorting.value.field]
    )
    const indexB = (categories[sorting.value.field].options as CategoryOptionList[]).indexOf(
      b.classes[sorting.value.field]
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
