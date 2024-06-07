<template>
   <v-sheet class="sheet-bg" align="center">
      <v-card-title class="mt-5 pb-0 title-horario">Entérate de los horarios</v-card-title>
      <v-card-subtitle class="subtitle-horario ">Puedes encontrar el horario general y los individuales por médico</v-card-subtitle>
      <v-card-text class="pa-0 mt-2">
         <div class="horarioClass ma-auto pa-6">
            <div class="horarioCompoClass ma-auto pa-auto"></div>
         </div>
      </v-card-text>
      <v-card-actions class="pa-0 ma-2" align="center">
         <v-btn class="agenda-class mx-auto my-5 text-h5 w-25" align-content="center" size="x-large" rounded="xl">
            Agenda tu cita
         </v-btn>
      </v-card-actions>
   </v-sheet>
</template>

<style scoped>
.sheet-bg{
   background: url("@/assets/svg.png") no-repeat center center;
   background-size:cover;
}

.horarioClass{
   width: 1210px;
   height: 788px;
   gap: 0px;
   background: #000000;
   opacity: 0.8px;
   font-family: 'Montserrat', sans-serif; 
}

.horarioCompoClass{
   width: 1153px;
   height: 728px;
   gap: 0px;
   background: #8E344D;
   opacity: 1px;
   font-family: 'Montserrat', sans-serif; 
}

.v-card-title.title-horario{
   font-family: 'Montserrat', sans-serif;
   font-size: 50px;
   font-weight: 900;
   line-height: 60.95px;
   text-align: center;
   color:#4D112C;

}
.v-card-subtitle.subtitle-horario{
   font-family: 'Montserrat', sans-serif;
   font-size: 24px;
   font-weight: 400;
   line-height: 29.26px;
   text-align: center;
   color: #4D112C;

}

.v-btn.agenda-class{
   font-family: 'Montserrat', sans-serif;
   font-weight: 700;
   background-color: #8E344D;
   color: white;
   text-transform: none;
}
</style>