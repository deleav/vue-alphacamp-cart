import Vue from 'vue';
import VueRouter from 'vue-router';
import MainVue from '../components/Main.vue';
import CheckoutStep from '../components/checkoutStep/CheckoutStep.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainVue,
    children: [
      {
        path: ':step',
        component: CheckoutStep,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
