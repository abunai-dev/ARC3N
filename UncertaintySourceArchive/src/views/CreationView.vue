<template>
  <main class="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-6 md:grid-rows-[auto_auto_1fr]">
    <h1 class="row-span-1 row-start-1 text-3xl font-bold">Suggest new Uncertainty</h1>
    <p class="row-span-1 row-start-3 md:row-start-2">
      To suggest an uncertainty: Fill this form out and then click the button. <br />
      This will redirect you to creating a GitHub issue. <br />
      There you can add images and more information. <br />
      Please do not change the generated text except where the issues allow you too, for example to
      insert an image.
    </p>

    <article class="row-span-1 row-start-2 space-y-5 md:row-start-3">
      <form class="space-y-5">
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
          <FormInputComponent
            id="keywords"
            label="Keywords"
            @input="updateKeywordField"
            inputType="custom"
          >
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => u.keywords).flat()"
              @input="updateKeywordField"
              placeholder="Keywords"
              allowNewOption
            />
          </FormInputComponent>
        </section>

        <section class="space-y-2">
          <FormInputComponent
            v-for="c in classesValues"
            :key="c"
            :id="c"
            :label="classes[c].name"
            :placeholder="`Enter ${classes[c].name}`"
            inputType="custom"
          >
            <select
              @change="(event) => updateClassField(c, getEventValue(event))"
              :id="c"
              :name="c"
              class="h-8 w-full rounded border border-black border-opacity-50 bg-transparent outline-none placeholder:text-gray-400 md:w-96"
            >
              <option :value="null">Select an option</option>
              <option v-for="o in classes[c].options" :key="o" :value="o">
                {{ classOptions[o].name }}
              </option>
            </select>
          </FormInputComponent>
        </section>

        <section>
          <FormInputComponent
            id="exampleText"
            label="Example Text"
            v-model="uncertainty.exampleText"
            placeholder="Example Text"
            inputType="multiline"
          />
        </section>

        <section class="space-y-2">
          <FormInputComponent id="parent" label="Parent Uncertainty" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => u.name)"
              :limit="1"
              @input="updateParentField"
              placeholder="Parent Uncertainty"
            />
          </FormInputComponent>
          <FormInputComponent id="children" label="Child Uncertainties" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => u.name)"
              @input="updateChildrenField"
              placeholder="Child Uncertainties"
            />
          </FormInputComponent>
          <FormInputComponent id="related" label="Related Uncertainties" inputType="custom">
            <SelectionSearchBox
              :options="uncertaintyList.map((u) => u.name)"
              @input="updateRelatedField"
              placeholder="Related Uncertainties"
            />
          </FormInputComponent>
        </section>
      </form>

      <button type="submit" :disabled="!allowSubmit" @click="console.log(uncertainty)">
        <ButtonComponent :disabled="!allowSubmit">Submit Uncertainty</ButtonComponent>
      </button>
    </article>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { classesValues, classes, Classes } from '@/model/classes/Class'
import { classOptions, type ClassOptionEnumType } from '@/model/classes/options/ClassOption'
import type { BaseUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { computed, ref, type PropType, type Ref } from 'vue'
import FormInputComponent from '@/components/FormInputComponent.vue'
import SelectionSearchBox from '@/components/SelectionSearchBox.vue'

const props = defineProps({
  uncertaintyList: {
    type: Array as PropType<BaseUncertainty[]>,
    required: true
  }
})

const uncertainty: Ref<Uncertainty> = ref({
  id: -1,
  name: '',
  description: '',
  keywords: [],
  exampleText: '',
  exampleImages: [],
  children: [],
  relatedUncertainties: [],
  classes: {} as Record<Classes, ClassOptionEnumType>
})

const allowSubmit = computed(() => {
  return (
    uncertainty.value.name.length > 0 &&
    uncertainty.value.description.length > 0 &&
    Object.values(uncertainty.value.classes).length === classesValues.length &&
    Object.values(uncertainty.value.classes).every((v) => v !== null)
  )
})

function updateKeywordField(value: string[]) {
  uncertainty.value.keywords = value
}

function updateClassField(c: Classes, value: ClassOptionEnumType | null) {
  console.log(value)
  if (value == null || (value as string) == 'null') {
    delete uncertainty.value.classes[c]
  } else {
    uncertainty.value.classes[c] = value
  }
}

function getEventValue(event: Event) {
  return (event?.target as unknown as { value: any })?.value
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

function getUncertainties(value: string[]) {
  return value
    .map((v) => props.uncertaintyList.find((u) => u.name === v))
    .filter((u) => u != undefined) as BaseUncertainty[]
}
</script>
