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
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})

const PARENT_ARROW = '--Parent-->'
const CHILD_ARROW = '--Child-->'
const RELATED_ARROW = '-.Related.-'

const idList = computed(() => {
  const idList = [props.uncertainty as BaseUncertainty]
  if (props.uncertainty.parent) {
    idList.push(props.uncertainty.parent)
  }
  idList.push(...props.uncertainty.relatedUncertainties)
  idList.push(...props.uncertainty.children)
  return idList
})

console.log(idList.value)
const diagrammClassesMermaidNotatio = computed(() =>
  idList.value
    .map((uncertainty) => {
      return `${uncertainty.id}[${uncertainty.name}]`
    })
    .join('\n')
)

const parentRelationshipMermaidNotatio = computed(() => {
  if (props.uncertainty.parent) {
    return `${props.uncertainty.id} ${PARENT_ARROW} ${props.uncertainty.parent.id}`
  }
  return ''
})

const relatedRelationshipsMermaidNotatio = computed(() => {
  return props.uncertainty.relatedUncertainties
    .map((relatedUncertainty) => {
      return `${props.uncertainty.id} ${RELATED_ARROW} ${relatedUncertainty.id}`
    })
    .join('\n')
})

const childrenRelationshipsMermaidNotation = computed(() => {
  return props.uncertainty.children
    .map((child) => {
      return `${child.id} ${CHILD_ARROW} ${props.uncertainty.id}`
    })
    .join('\n')
})

const mermaidCode = `flowchart BT
  ${diagrammClassesMermaidNotatio.value}
  ${parentRelationshipMermaidNotatio.value}
  ${relatedRelationshipsMermaidNotatio.value}
  ${childrenRelationshipsMermaidNotation.value}
  style ${props.uncertainty.id} stroke-width:4px
`

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
