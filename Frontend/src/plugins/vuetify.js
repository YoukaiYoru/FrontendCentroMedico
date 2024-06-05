/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VDateInput } from 'vuetify/labs/components'


// https://vuetifyjs.com/en/introdution/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  components:{
    VDateInput,
  },

})
