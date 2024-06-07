<template>
   <v-card class="cita-form-card pa-5">
      <v-card-title class="title-cita-form ma-6">Configura tu Cita</v-card-title>
      <v-card-text>
         <v-form class="mx-8">
            <v-card-text class="title-field">Especialidad</v-card-text>
            <v-text-field variant="solo" > Psicología</v-text-field>

            <v-card-text class="title-field">Fecha de atención</v-card-text>
            <v-date-input variant="solo" prepend-icon=""></v-date-input>


            <v-card-text class="title-field">Médico</v-card-text>
            <v-combobox  variant="solo"
            :items="json.map(item => item.name)"
            item-text="nombre"
            item-value="name"
            v-model="selectedName"
            ></v-combobox>

            <v-card-text class="title-field">Horario</v-card-text>
            <v-combobox variant="solo"           
            :items="filteredMedicos"
            item-text="horario"
            item-value="horario"
            v-model="selectedHorario"></v-combobox>
         </v-form>
      </v-card-text>
      <v-card-text class="mx-auto text-center mb-5" >
         Al presionar “Agendar cita”, usted está accediendo a nuestros Términos de Servicio y Políticas Privadas
      </v-card-text>
      <v-card-actions align="center">
         <v-btn class="btnColor mx-auto">Agendar Cita</v-btn>
      </v-card-actions>
      </v-card>
</template>

<style scoped>
.btnColor{
   font-family: 'Montserrat', sans-serif;
   font-weight: 700;
   background-color: #8E344D;
   color: white;
}
.title-field{
   font-family: 'Montserrat', sans-serif;
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
   color: #000000;
   text-align: start;
   padding: 0;
   margin-bottom: 1rem;
}

.cita-form-card{
   background-color: #E1C48C;
   border-radius: 45px;
}
.title-cita-form{
   font-family: 'Montserrat', sans-serif;
   font-size: 24px;
   font-weight: 900;
   line-height: 60.95px;
   text-align: center;
   color:#4D112C;
}
</style>


<script lang="js" setup>
import { ref, computed } from 'vue';

import json from './variablesJSON/HorarioMedicos.json';

const selectedName = ref(null);
const selectedHorario = ref(null);

const filteredMedicos = computed(() => {
   if (!selectedName.value) return [];
   const selectedMedico = json.find(item => item.name === selectedName.value);
   return selectedMedico ? selectedMedico.horarios : [];
});
</script>