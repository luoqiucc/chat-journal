import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/detail/c202103',
            component: HomeView
        },
        {
            path: '/detail/:id',
            name: 'detail',
            props: true,
            component: () => import('@/views/DetailView.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: '404',
            component: () => import('@/views/404.vue')
        }
    ]
})

export default router
