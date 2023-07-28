<template>
  <div class = "container">
    <header>
      <img alt="Uncertainty source logo" class="logo" src="./assets/logo.jpg" width="1300" height="150" />
      <h1>Welcome to the Uncertainty Source Archive</h1>   
    </header>
    <main>
      <div class="button-container">
        <p v-if="!showTable">Press the button below to get started!</p>
        <button @click="toggleShowTable" class="button" v-if="!showTable">
          Show Table
        </button> 
      </div>
        <div v-if="showTable" class="table">
          <Suspense>
            <TableInstance />
          </Suspense>
        </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TableInstance from './components/TableInstance.vue'
import { ref } from 'vue'


const showTable = ref(false)

function toggleShowTable() {
  showTable.value = !showTable.value
  console.log("The value is: " + showTable.value)
}

</script>



<style>
header {
  padding: 20px;
  text-align: center;
  line-height: 1.5;
}

main {
  max-width: 2500px;
  flex: 1;
  display: flex;
  justify-content: center;
}

.logo {
  position: relative;
  top: 10px;
  display: block;
  margin: 0 auto 2rem;
}
h1 {
  margin-top: 30px;
  text-align: center;
  color: #2c3e50;
}
p {
  text-align: center;
  color: grey;
  display: block;
}
.button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: #fff;
  color: #2c3e50;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.table {
  clear: both;
  display: flexbox;
  margin: 40px auto;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background: #fff;
  color: #2c3e50;
  font-size: 1rem;
  max-width: 1500px;
}
</style>
