<template>
  <div class="mx-auto w-fit space-y-5 [&>*]:w-fit">
    <h1 class="text-3xl font-bold">Guide</h1>
    <div id="intro">
      ARC<sup>3</sup>N is a collection of uncertainties regarding confidentiality in software
      development. It integrates into an eclipse tool. More information can be found in the
      <a href="#eclipse">guide</a> and on <a href="https://www.github.com/abunai-dev">Github</a>.
    </div>

    <div id="arcen">
      <h3 class="text-xl font-bold">ARC<sup>3</sup>N</h3>
      In the <RouterLink to="archive">archive</RouterLink> you can find a list of all uncertainties
      in the database. Clicking a row leads to a more detailed view of the uncertainty giving a more
      detailed description and other related uncertainties. <br />
      An overview of the classes can be found <RouterLink to="classification">here</RouterLink>.
      Click on a category to get to a more detailed view. <br />
      The uncertainties are managed through Github issues. They are used as a discussion forum. To
      create a new issue according to the template you can use the
      <RouterLink to="create">creation page</RouterLink>.
    </div>

    <div id="eclipse">
      <h3 class="text-xl font-bold">Eclipse tool</h3>
    </div>
  </div>
</template>

<style scoped lang="postcss">
a {
  @apply text-link underline dark:text-link-dark;
}
</style>
