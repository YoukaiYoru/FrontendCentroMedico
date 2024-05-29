<template>
   <v-card color="white d-lg-inline-block w-100 h-100 ma-0">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 285" xmlns="http://www.w3.org/2000/svg" class="back transition duration-300 ease-in-out delay-150">
         <path d="M 0,700 L 0,262 C 62.845176730486,214.54768041237114 125.690353460972,167.09536082474227 195,190 C 264.309646539028,212.90463917525773 340.083762886598,306.1662371134021 390,348 C 439.916237113402,389.8337628865979 463.9745949926362,380.2396907216495 509,372 C 554.0254050073638,363.7603092783505 620.0178571428572,356.875 688,322 C 755.9821428571428,287.125 825.9539764359351,224.26030927835052 899,194 C 972.0460235640649,163.73969072164948 1048.166237113402,166.08376288659792 1108,206 C 1167.833762886598,245.91623711340208 1211.3810751104565,323.4046391752577 1264,339 C 1316.6189248895435,354.5953608247423 1378.3094624447717,308.29768041237116 1440,262 L 1440,700 L 0,700 Z" stroke="none" stroke-width="0" fill="#e1c48c" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 350)"></path>
      </svg>  
      <v-card-title class="textTitle text-center">Test de Prevención de la Salud</v-card-title>
      <v-card-subtitle class=" textSubTitle  text-center ">Gratis | Sin registro previo | Rápido y accesible</v-card-subtitle>
      <v-row class="ma-0">
         <v-col
         v-for="card in advantagesCards"
         :key="card.title"
         cols="12"
         md="4"
         >
         <v-card
            class="mx-auto"
            max-width="344"
            outlined
            :color="card.color"
         >
            <v-card-title>
               <v-icon>{{ card.icon }}</v-icon>
               <span class="title font-weight-bold">{{ card.title }}</span>
            </v-card-title>
            <v-card-text>{{ card.description }}</v-card-text>
         </v-card>
         </v-col>
      </v-row>
   </v-card>
</template>

<script setup>

import { ref } from 'vue'


const advantagesCards = ref([
   {
      id: '1',
      title: 'Cardiología',
      description: 'Especialidad médica que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del corazón y del aparato circulatorio.',
      icon: 'mdi-heart-pulse',
      color: 'red'
   },
   {
      id: '2',
      title: 'Dermatología',
      description: 'Especialidad médica que se encarga del estudio de la estructura y función de la piel, así como de las enfermedades que la afectan, su diagnóstico, prevención y tratamiento.',
      icon: 'mdi-face',
      color: 'blue'
   },
   {
      id: '3', 
      title: 'Ginecología',
      description: 'Especialidad médica y quirúrgica que trata las enfermedades del sistema reproductive femenino)'
   }
   ])


</script>

<style scoped>
.textSubtitle{
   font-family: "Montserrat", sans-serif;
   font-optical-sizing: auto;
   font-weight: 400;
   font-style: normal;
   font-size: 24  px;
   color: #4D112C;

}
.back {
   position: absolute;
   margin: 0%;
   top: 0;
   left: 0;
   z-index: -1;


}
.textTitle{

   font-family: "Montserrat", sans-serif;
   font-optical-sizing: auto;
   font-weight: 900;
   font-style: normal;
   font-size: 50px;
   color: #4D112C;
}
</style>