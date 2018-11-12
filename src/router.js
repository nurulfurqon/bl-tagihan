import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Checkout from './views/Checkout.vue';
import Tv from './views/TvKabel.vue';
import Kredivo from './views/Kredivo.vue';
import CheckoutKredivo from './views/CheckoutKredivo.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/checkout/:id/:jumlah',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/checkoutkredivo/:id/:jumlah',
      name: 'CheckoutKredivo',
      component: CheckoutKredivo,
    },
    {
      path: '/tv',
      name: 'tvkabel',
      component: Tv,
    },
    {
      path: '/kredivo',
      name: 'kredivo',
      component: Kredivo,
    },
  ],
});
