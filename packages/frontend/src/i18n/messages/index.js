import merge from 'deepmerge'
import commonMessages from './common-messages'
import vuetifyMessages from './vuetify-messages'

const messages = merge.all([commonMessages, vuetifyMessages])

export default messages