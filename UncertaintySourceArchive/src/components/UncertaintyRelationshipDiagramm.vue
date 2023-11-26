<!-- Displays the relationship between uncertainties -->
<template>
  <pre class="mermaid [&>*]:mx-auto">
    {{ mermaidCode }}
  </pre>
</template>

<script setup lang="ts">
import type { BaseUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { computed, ref, type PropType, type Ref, onMounted } from 'vue'
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
      return `${uncertainty.id}[${uncertainty.name}]`
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
  style ${props.uncertainty.id} stroke-width:4px
`

/** Reference to the pre where the diagramm is drawen in */
const diagramm: Ref<null | HTMLElement> = ref(null)

onMounted(() => {
  if (diagramm.value === null) {
    return
  }
  mermaid.initialize({
    startOnLoad: false
  })
  mermaid.run({
    nodes: [diagramm.value]
  })
})
</script>
