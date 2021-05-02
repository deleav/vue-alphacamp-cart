import Vue from 'vue';
import VueRouter from 'vue-router';
import MainVue from '../components/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainVue,
    children: [
      {
        path: '/',
        component: () =>
          import(
            /* webpackChunkName: "ShippingInfo" */
            '../components/checkoutStep/ShippingInfo.vue'
          ),
      },
      {
        path: 'shippingInfo',
        component: () =>
          import(
            /* webpackChunkName: "ShippingInfo" */
            '../components/checkoutStep/ShippingInfo.vue'
          ),
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
