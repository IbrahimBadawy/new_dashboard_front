<template>
    <div>
        <Button label="Click Me" />
    </div>
</template>

<script>
import { defineComponent } from 'vue'
// 1) Import the Button component from PrimeVue
import Button from 'primevue/button'

export default defineComponent({
    name: 'HomeView',
    components: {
        Button
    }
})
</script>

<style scoped>
/* optional styling */
</style>