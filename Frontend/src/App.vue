<template>
  <v-app class="myfont">
    <v-toolbar v-if="$route.path !== '/login'" app>
    <NavBar />
    </v-toolbar>
    <v-main>
      <transition>
        <router-view class="ma-auto"></router-view>
      </transition>
      <AppFooter v-if="$route.path !== '/login'" />
    </v-main>
  </v-app>
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue';
  import AppFooter from '@/components/AppFooter.vue';
</script>

<style>
  .body {
    background-color: #f5f5f5;
  }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.8s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>