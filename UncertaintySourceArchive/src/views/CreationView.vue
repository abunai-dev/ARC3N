<template>
  <main
    class="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-6 md:grid-rows-[auto_auto_1fr] md:gap-2"
  >
    <h1 class="row-span-1 row-start-1 text-3xl font-bold">Suggest new Uncertainty</h1>
    <p class="row-span-1 row-start-3 md:row-start-2">
      To suggest an uncertainty: Fill this form out and then click the button. <br />
      This will redirect you to creating a GitHub issue. <br />
      There you can add images and more information. <br />
      Please do not change the generated text except where the issues allow you too, for example to
      insert an image.
    </p>

    <article class="row-span-1 row-start-2 space-y-7 md:row-start-3 md:mt-5">
      <form class="space-y-10">
        <!-- Base information -->
        <section class="space-y-2">
          <FormInputComponent
            id="name"
            label="Name"
            v-model="uncertainty.name"
            placeholder="Name"
            required
          />
          <FormInputComponent
            id="description"
            label="Description"
            v-model="uncertainty.description"
            placeholder="Description"
            required
            inputType="multiline"
          />
          <FormInputComponent id="keywords" label="Keywords" inputType="custom">
            <SelectionSearchBox
              :options="
                uncertaintyList
                  .map((u) => u.keywords)
                  .flat()
                  .filter((v, i, a) => a.indexOf(v) === i)
              "
              @input="updateKeywordField"
              placeholder="Keywords"
              allowNewOption
            />
          </FormInputComponent>
          <FormInputComponent
            id="reference"
            label="Literature Reference"
            v-model="uncertainty.sourceReferenceLink"
            placeholder="Literature Reference"
          />
        </section>

        <!-- Categories and options -->
        <section class="space-y-2">
          <FormInputComponent
            v-for="c in categoryOrder"
            :key="c"
            :id="c"
            :label="categories[c].name"
            :placeholder="`Enter ${categories[c].name}`"
            inputType="custom"
          >
            <ClassOptionSelector
              :category="c"
              v-model="uncertainty.classes[c]"
              class="min-w-[800px] max-w-full"
            />
          </FormInputComponent>
        </section>

        <!-- Example text -->
        <section>
          <FormInputComponent
            id="exampleText"
            label="Example Text"
            v-model="uncertainty.exampleText"
            placeholder="Example Text"
            inputType="multiline"
          />
        </section>

        <!-- Relation to other uncertainties -->
        <section class="space-y-2">
          <FormInputComponent id="parent" label="Parent Uncertainty" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => `#${u.id} - ${u.name}`)"
              :limit="1"
              @input="updateParentField"
              placeholder="Parent Uncertainty"
            />
          </FormInputComponent>
          <FormInputComponent id="children" label="Child Uncertainties" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => `#${u.id} - ${u.name}`)"
              @input="updateChildrenField"
              placeholder="Child Uncertainties"
            />
          </FormInputComponent>
          <FormInputComponent id="related" label="Related Uncertainties" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => `#${u.id} - ${u.name}`)"
              @input="updateRelatedField"
              placeholder="Related Uncertainties"
            />
          </FormInputComponent>
        </section>
      </form>

      <section class="flex flex-col gap-5 align-middle md:flex-row">
        <button type="submit" @click="submitUncertainty()">
          <ButtonComponent :disabled="!allowSubmit">Submit Uncertainty</ButtonComponent>
        </button>
        <p class="text-red-700 dark:text-red-500" v-if="showError">
          Please provide a name and a description.
        </p>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { categoryOrder, categories, CategoryList } from '@/model/categories/Category'
import { type CategoryOptionList } from '@/model/categories/options/CategoryOption'
import type { BaseUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { computed, ref, type PropType, type Ref } from 'vue'
import FormInputComponent from '@/components/FormInputComponent.vue'
import SelectionSearchBox from '@/components/SelectionSearchBox.vue'
import { UncertaintyIssueEncoder } from '@/model/resourceGetter/encoder/UncertaintyIssueEncoder'
import { IssueResourceGetter } from '@/model/resourceGetter/IssueResourceGetter'
import ClassOptionSelector from '@/components/ClassOptionSelector.vue'

const props = defineProps({
  /** List of all uncertainties */
  uncertaintyList: {
    type: Array as PropType<BaseUncertainty[]>,
    required: true
  }
})

const classes = {} as Record<CategoryList, CategoryOptionList>
for (const c of categoryOrder) {
  classes[c] = categories[c].options[0]
}

/** Object that is being filled in by the form */
const uncertainty: Ref<Uncertainty> = ref({
  id: -1,
  name: '',
  description: '',
  keywords: [],
  exampleText: '',
  exampleImages: [],
  children: [],
  relatedUncertainties: [],
  classes: classes,
  sourceReferenceLink: ''
})

const allowSubmit = computed(() => {
  return (
    uncertainty.value.name.length > 0 &&
    uncertainty.value.description.length > 0 &&
    Object.values(uncertainty.value.classes).length === categoryOrder.length &&
    Object.values(uncertainty.value.classes).every((v) => v !== null)
  )
})

function updateKeywordField(value: string[]) {
  uncertainty.value.keywords = value
}

function updateParentField(value: string[]) {
  const parent = getUncertainties(value)
  if (parent.length > 0) {
    uncertainty.value.parent = parent[0]
  } else {
    uncertainty.value.parent = undefined
  }
}

function updateChildrenField(value: string[]) {
  uncertainty.value.children = getUncertainties(value)
}

function updateRelatedField(value: string[]) {
  uncertainty.value.relatedUncertainties = getUncertainties(value)
}

/**
 * Returns the uncertainties that have the given names
 */
function getUncertainties(value: string[]) {
  const uncertainties = props.uncertaintyList.map((u) => {
    return { uncertainty: u, name: `#${u.id} - ${u.name}` }
  })
  return value
    .map((v) => uncertainties.find((u) => u.name === v))
    .map((u) => u?.uncertainty)
    .filter((u) => u != undefined) as BaseUncertainty[]
}

const showError = ref(false)

function submitUncertainty() {
  if (!allowSubmit.value) {
    showError.value = true
    return
  }
  showError.value = false
  if (uncertainty.value.sourceReferenceLink?.trim().length === 0) {
    uncertainty.value.sourceReferenceLink = undefined
  }
  const issueString = new UncertaintyIssueEncoder().encode(uncertainty.value)
  const url = `https://www.github.com/${IssueResourceGetter.OWNER}/${IssueResourceGetter.REPO}/issues/new?title=${uncertainty.value.name}&body=${issueString}&labels=${IssueResourceGetter.PROPOSED_ISSUE_LABEL}`
  window.open(encodeURI(url).replace(/#/g, '%23'), '_blank')?.focus()
}
</script>
