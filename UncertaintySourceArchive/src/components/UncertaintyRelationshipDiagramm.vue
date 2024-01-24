<!-- Displays the relationship between uncertainties -->
<template>
  <div ref="diagrammContainer"></div>
</template>

<script setup lang="ts">
import type { BaseUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { computed, ref, type PropType, type Ref, onMounted, inject, watch } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  /** Root uncertainty of diagramm */
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})

// Definitions of the arrow in mermaid notation
const PARENT_ARROW = '--Parent-->'
const CHILD_ARROW = '--Child-->'
const RELATED_ARROW = '-.Related.-'

/** List of the uncertainties to display in the diagramm */
const idList = computed(() => {
  const idList = [props.uncertainty as BaseUncertainty]
  if (props.uncertainty.parent) {
    idList.push(props.uncertainty.parent)
  }
  idList.push(...props.uncertainty.relatedUncertainties)
  idList.push(...props.uncertainty.children)
  return idList
})

/** The nodes of the diagramm in mermaid notation */
const diagrammClassesMermaidNotation = computed(() =>
  idList.value
    .map((uncertainty) => {
      return `${uncertainty.id}[${uncertainty.name}]:::styleClass`
    })
    .join('\n')
)

/** Mermaid notation of the parent relationship */
const parentRelationshipMermaidNotation = computed(() => {
  if (props.uncertainty.parent) {
    return `${props.uncertainty.id} ${PARENT_ARROW} ${props.uncertainty.parent.id}`
  }
  return ''
})

/** Mermaid notation of the relationships to the related uncertainties */
const relatedRelationshipsMermaidNotation = computed(() => {
  return props.uncertainty.relatedUncertainties
    .map((relatedUncertainty) => {
      return `${props.uncertainty.id} ${RELATED_ARROW} ${relatedUncertainty.id}`
    })
    .join('\n')
})

/** Mermiad notation of the relationships to the children */
const childrenRelationshipsMermaidNotation = computed(() => {
  return props.uncertainty.children
    .map((child) => {
      return `${child.id} ${CHILD_ARROW} ${props.uncertainty.id}`
    })
    .join('\n')
})

/** The mermaid code to display */
const mermaidCode = `flowchart BT
  ${diagrammClassesMermaidNotation.value}
  ${parentRelationshipMermaidNotation.value}
  ${relatedRelationshipsMermaidNotation.value}
  ${childrenRelationshipsMermaidNotation.value}
  style ${props.uncertainty.id} stroke-width:3px`

/** Reference to the pre where the diagramm is drawen in */
const diagrammContainer: Ref<null | HTMLElement> = ref(null)

const dark = inject('dark') as Ref<boolean>

function draw() {
  if (diagrammContainer.value === null) {
    return
  }
  const pre = document.createElement('pre')
  const code = `${mermaidCode}\n
  classDef default stroke:${dark.value ? '#ddddff' : '#222230'},fill:${
    dark.value ? '#101030' : '#eeeff'
  }`
  pre.innerHTML = code
  if (diagrammContainer.value.firstChild) {
    diagrammContainer.value.removeChild(diagrammContainer.value.firstChild)
  }
  diagrammContainer.value.appendChild(pre)
  mermaid.initialize({
    startOnLoad: false,
    theme: dark.value ? 'dark' : 'light'
  })
  mermaid.run({
    nodes: [pre]
  })
}

watch(dark, () => {
  draw()
})

onMounted(() => {
  draw()
})
</script>

<style scoped>
.styleClass > rect {
  fill: #ff0000;
  stroke: #ffff00;
}
</style>
