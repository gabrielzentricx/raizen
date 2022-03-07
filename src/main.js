import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Patentes from '@/components/Patentes.vue'

const router = createRouter({

	history: createWebHistory(),
	routes: [
		{path: '/', name: 'Home', component: Home},
		{path: '/login', name: 'Login', component: Login},
		{path: '/patentes', name: 'Patentes', component: Patentes}
	]
})

createApp(App)
.use(router)
.mount('#app')
