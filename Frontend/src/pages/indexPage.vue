<template>


<NavBar />
<div>
  <v-img src="@/assets/fondoCentro.jpg" ></v-img>
  <TestComponent class="ma-auto"/>
</div>

<AppFooter  />


</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
  import AppFooter from '@/components/AppFooter.vue'
  import TestComponent from '@/components/TestComponent.vue'
</script>
