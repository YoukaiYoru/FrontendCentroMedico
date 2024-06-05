<template>
   <v-app-bar class="barColor" height="79px" app >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="titleBar">Centro Médico UNI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" to="/" class="txtBtnNav" @click="scrollToTop">Inicio</v-btn>
      <v-btn variant="text" to="/test" class="txtBtnNav" @click="scrollToTop">Test</v-btn>
      <v-btn variant="text" to="/horarios" class="txtBtnNav" @click="scrollToTop">Horarios</v-btn>
      <v-btn rounded="xl" size="large" class="ma-3 btnColor" @click="$router.push('/login')" >Iniciar Sesión</v-btn>
   </v-app-bar>
</template>

<script setup>

const scrollToTop = () => {
   window.scrollTo({
      top: 0,
   });
};
</script>

<style scoped>
.v-btn[to] {
   scroll-behavior: smooth;
}

/* Add custom styles here */
.v-app-bar.barColor {
   background-color: #FFFFFF;
   color: black;
   font-family: "Montserrat", sans-serif;
   font-optical-sizing: auto;
   font-weight: 700;
}

.v-toolbar-title.titleBar {
   font-family: "Montserrat", sans-serif;
   font-optical-sizing: auto;
   font-weight: 900;
   font-style: normal;

}

.btnColor{
   background-color: #8E344D;
   color: white;
   font-weight: 700;
   text-transform: none;
}

.txtBtnNav{
   font-weight: 700;
   text-transform: none;
}

</style>