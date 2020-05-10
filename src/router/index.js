    import Vue from 'vue';
    import Router from 'vue-router';

    Vue.use(Router);

    const Layout = () => import('@/layout');
    const Home = () => import('@/views/home/index.vue');
    const Me = () => import('@/views/me/index.vue');


    const router = new Router({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: Layout,
                redirect: '/home',
                children: [
                    {
                        path: 'home',
                        name: 'home',
                        component: Home
                    },
                    {
                        path: 'me',
                        name: 'me',
                        component: Me
                    }
                ]
            }
        ]
    })


    export default router;