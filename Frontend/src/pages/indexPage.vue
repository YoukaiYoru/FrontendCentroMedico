<template>

<v-toolbar app>
    <NavBar />
  </v-toolbar>  
<v-main class="ma-0 pa-0">
  <div>
      <v-img src="@/assets/fondoCentro.jpg" class="cover"></v-img>
      <TestComponent class="ma-auto"/>
    </div>
    <AppFooter  />
</v-main>

</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import TestComponent from '@/components/TestComponent.vue'
</script>

<style scoped>

</style>