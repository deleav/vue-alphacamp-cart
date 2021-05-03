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
      { path: '/', redirect: '/1' },
      {
        path: '1',
        component: () =>
          import(
            /* webpackChunkName: "ShippingInfo" */
            '../components/checkoutStep/ShippingInfo.vue'
          ),
      },
      {
        path: '2',
        component: () =>
          import(
            /* webpackChunkName: "ShippingInfo" */
            '../components/checkoutStep/ShippingInfo.vue'
          ),
      },
      {
        path: '3',
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
