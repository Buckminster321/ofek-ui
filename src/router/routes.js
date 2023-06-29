export const routes = [
    {
        path: '',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
    },
    {
        path: '/education',
        name: 'Education',
        component: () => import('@/pages/Education.vue'),
    },
    {
        path: '/skills',
        name: 'Skills',
        component: () => import('@/pages/Skills.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/pages/Contact.vue'),
    },
];