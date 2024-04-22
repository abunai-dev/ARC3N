<template>
  <main class="flex h-full flex-col items-center text-center">
    <img src="https://raw.githubusercontent.com/abunai-dev/.github/main/profile/abunai-art.png" />

    <h1 class="text-3xl font-bold">ARC<sup>3</sup>N</h1>
    <h3 class="text-xl">
      Rese<b>ARC</b>h <b>ARC</b>hive for Software-<b>ARC</b>hitectural U<b>N</b>certainty
    </h3>

    <p class="mb-3 mt-10 w-3/6 text-left">
      Model-based confidentiality analyses help identify confidentiality violations already at
      design time <span class="text-xs italic">[1]</span>. However, uncertainty both within software
      systems and their environment <span class="text-xs italic">[2]</span> voids statements about
      confidentiality and must be considered in the analysis process
      <span class="text-xs italic">[3]</span>. The lack of awareness about uncertainty sources is
      even more challenging as it limits the comprehensiveness of uncertainty-aware analysis
      <span class="text-xs italic">[4]</span>.
    </p>

    <p class="mb-3 w-3/6 text-left">
      To address this limitation, this <span class="font-bold">research archive</span> collects
      uncertainty sources with a potential impact on confidentiality. Based on an existing
      classification of uncertainty <span class="text-xs italic">[5]</span>, researchers and
      practitioners can identify relevant uncertainty sources and better understand their properties
      or find related uncertainty sources. The collection can be easily extended by the community.
      The identified uncertainty sources can be exported and used in uncertainty impact analysis
      <span class="text-xs italic">[6]</span> or uncertainty-aware confidentiality analysis
      <span class="text-xs italic">[7, 8]</span>.
    </p>

    <p class="my-0.5 mb-8 w-3/6 text-left">
      <span class="font-bold">ARC<sup>3</sup>N</span> is part of the
      <span class="font-bold">ABUNAI</span> research project which provides a comprehensive process
      of uncertainty-aware confidentiality analysis <span class="text-xs italic">[3]</span>. To
      learn more about the project, visit the
      <a class="text-link underline dark:text-link-dark" href="https://abunai.dev/"
        >project website</a
      >.
    </p>

    <div class="inline-flex space-x-3">
      <RouterLink to="/archive">
        <ButtonComponent class="p-1 pl-3 pr-3">Go to the archive</ButtonComponent>
      </RouterLink>
      <RouterLink to="/category">
        <ButtonComponent class="p-1 pl-3 pr-3">Go to the classification</ButtonComponent>
      </RouterLink>
      <a href="https://abunai.dev">
        <ButtonComponent class="p-1 pl-3 pr-3">Visit the project website</ButtonComponent>
      </a>
    </div>

    <p class="mt-16 w-3/6 text-left text-xs italic">
      [1] S. Seifermann, et al., "Detecting violations of access control and information flow
      policies in data flow diagrams", JSS, vol. 184, Elsevier, 2022.<br />
      [2] M. Acosta, et al., "Uncertainty in coupled models of cyber-physical systems", MODELS-C,
      ACM, 2022.<br />
      [3] S. Hahner, "Architectural Access Control Policy Refinement and Verification under
      Uncertainty", ECSA-C, 2021.<br />
      [4] D. Garlan, "The Unknown Unknowns Are Not Totally Unknown", SEAMS, IEEE/ACM, 2021.<br />
      [5] S. Hahner, et al., "A Classification of Software-Architectural Uncertainty Regarding
      Confidentiality", ICETE, Springer, 2023.<br />
      [6] S. Hahner, et al., "Architecture-Based Uncertainty Impact Analysis to Ensure
      Confidentiality", SEAMS, IEEE/ACM, 2023.<br />
      [7] S. Hahner, et al., "Model-based Confidentiality Analysis under Uncertainty", ICSA-C, IEEE,
      2023.<br />
      [8] M. Walter, et al., "Architectural Optimization for Confidentiality Under Structural
      Uncertainty", ECSA, Springer, 2022.<br />
    </p>
    <p class="mt-4">&nbsp;</p>
  </main>
</template>

<script setup lang="ts">
import ButtonComponent from '@/components/ButtonComponent.vue'
import { RouterLink } from 'vue-router'
</script>
