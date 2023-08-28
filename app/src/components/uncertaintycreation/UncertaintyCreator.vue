<template>
    <header>Welcome to the Uncertainty Creator</header>
    <main>
        <div class="description">
            <p>Please fill in the following form and click on send. Afterwards your uncertainty will be send as pull request for an admin to verify.</p>
        </div>
        <div class="Form">
            <CreationForm />
        </div>
        
        
    </main>

</template>
<script setup lang="ts">
import CreationForm from './CreationForm.vue';

</script>
<style scoped>
    header {
        font-size: 2em;
        text-align: center;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .description {
        width: 50%;
        text-align: center;
    }
    .Form {
        width: 50%;
    }
    </style>