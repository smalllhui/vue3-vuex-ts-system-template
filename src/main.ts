import { createApp } from 'vue'
import { store, key } from '@/store'
import { registerDirective } from '@/directive'
import router from './router'
import plugins from './plugins'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(plugins)
registerDirective(app)
app.mount('#app')
