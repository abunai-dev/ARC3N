<!-- Displays the relationship between uncertainties -->
<template>
  <div ref="diagramContainer"></div>
</template>

<script setup lang="ts">
import type { BaseUncertainty, Uncertainty } from '@/model/uncertainty/Uncertainty'
import { computed, ref, type PropType, type Ref, onMounted, inject, watch } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  /** Root uncertainty of diagram */
  uncertainty: {
    type: Object as PropType<Uncertainty>,
    required: true
  }
})

// Definitions of the arrow in mermaid notation
const PARENT_ARROW = '--Parent-->'
const CHILD_ARROW = '--Child-->'
const RELATED_ARROW = '-.Related.-'

/** List of the uncertainties to display in the diagram */
const idList = computed(() => {
  const idList = [props.uncertainty as BaseUncertainty]
  if (props.uncertainty.parent) {
    idList.push(props.uncertainty.parent)
  }
  idList.push(...props.uncertainty.relatedUncertainties)
  idList.push(...props.uncertainty.children)
  return idList
})

/** The nodes of the diagram in mermaid notation */
const diagramClassesMermaidNotation = computed(() =>
  idList.value
    .map((uncertainty) => {
      return `${uncertainty.id}[${uncertainty.name}]:::styleClass\n${uncertainty.id}:::uncertaintyId${uncertainty.id}`
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

/** Mermaid notation of the relationships to the children */
const childrenRelationshipsMermaidNotation = computed(() => {
  return props.uncertainty.children
    .map((child) => {
      return `${child.id} ${CHILD_ARROW} ${props.uncertainty.id}`
    })
    .join('\n')
})

/** The mermaid code to display */
const mermaidCode = `flowchart LR
  ${diagramClassesMermaidNotation.value}
  ${parentRelationshipMermaidNotation.value}
  ${relatedRelationshipsMermaidNotation.value}
  ${childrenRelationshipsMermaidNotation.value}
  style ${props.uncertainty.id} stroke-width:3px`

/** Reference to the pre where the diagram is drawn in */
const diagramContainer: Ref<null | HTMLElement> = ref(null)

const dark = inject('dark') as Ref<boolean>

async function draw() {
  if (diagramContainer.value === null) {
    return
  }
  const pre = document.createElement('div')
  pre.id = 'diagram'
  const code = `${mermaidCode}\n
  classDef default stroke:${dark.value ? '#ddddff' : '#222230'},fill:${
    dark.value ? '#101030' : '#eeeff'
  }`
  if (diagramContainer.value.firstChild) {
    diagramContainer.value.removeChild(diagramContainer.value.firstChild)
  }
  diagramContainer.value.appendChild(pre)
  mermaid.initialize({
    startOnLoad: false,
    theme: dark.value ? 'dark' : 'light'
  })
  let { svg } = await mermaid.render('diagram', code)

  // Makes sure there is no cutoff on chromium based browsers
  const viewBox = svg
    .match(/viewBox="(.*?)"/)?.[1]
    .split(' ')
    .map((v) => parseInt(v.trim()))
  if (!viewBox) {
    return
  }
  svg = svg.replace(/viewBox=".*?"/, `viewBox="0 0 ${viewBox[2]} ${viewBox[3] + 10}"`)
  diagramContainer.value.innerHTML = svg

  idList.value.forEach((uncertainty) => {
    if (uncertainty.id === props.uncertainty.id) {
      return
    }
    const element = document.getElementsByClassName(`uncertaintyId${uncertainty.id}`)[0]
    if (element) {
      ;(element as HTMLElement).style.cursor = 'pointer'
      element.addEventListener('click', () => {
        const a = document.createElement('a')
        a.href = `/uncertainty/${uncertainty.id}`
        a.click()
      })
      element.addEventListener('auxclick', () => {
        const a = document.createElement('a')
        a.href = `/uncertainty/${uncertainty.id}`
        a.target = '_blank'
        a.click()
      })
    }
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
