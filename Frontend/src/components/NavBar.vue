<template>
   <v-app-bar class="barColor" height="79px" >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="titleBar">Centro Médico UNI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" class="txtBtnNav">Inicio</v-btn>
      <v-btn variant="text" class="txtBtnNav">Test</v-btn>
      <v-btn variant="text" class="txtBtnNav">Horarios</v-btn>
      <v-btn rounded="xl" size="large" class="ma-3 btnColor" @click="$router.push('/login')" >Iniciar Sesión</v-btn>
   </v-app-bar>
</template>

<script setup>
</script>

<style scoped>
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