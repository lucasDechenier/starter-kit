import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { pt, en, es } from 'vuetify/locale'

const vuetify = createVuetify({
  locale: {
    locale: 'pt',
    fallback: 'en',
    messages: { pt, en, es }
  },
  components,
  directives,
})

export default vuetify;