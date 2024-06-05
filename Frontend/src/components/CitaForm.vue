<template>
   <v-card>
      <v-card-title>Configura tu Cita</v-card-title>
      <v-card-text>
         <v-form class="mx-8">
            <v-card-text>Especialidad</v-card-text>
            <v-text-field variant="solo" > Psicología</v-text-field>

            <v-card-text>Fecha de atención</v-card-text>
            <v-date-input variant="solo" prepend-icon=""></v-date-input>


            <v-card-text>Médico</v-card-text>
            <v-combobox  variant="solo"
            :items="json.map(item => item.name)"
            item-text="nombre"
            item-value="name"
            v-model="selectedName"
            ></v-combobox>

            <v-card-text>Horario</v-card-text>
            <v-combobox variant="solo"           
            :items="filteredMedicos"
            item-text="horario"
            item-value="horario"
            v-model="selectedHorario"></v-combobox>
         </v-form>
      </v-card-text>
      <v-card-text>
         Al presionar “Agendar cita”, usted está accediendo a nuestros Términos de Servicio y Políticas Privadas
      </v-card-text>
      <v-card-actions>
         <v-btn>Agendar Cita</v-btn>
      </v-card-actions>
      </v-card>
</template>


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