import Vue from 'vue';
import Router from 'vue-router';
import AppCalificaciones from './components/AppCalificaciones.vue';
import AppRegistro from './components/AppRegistro.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/calificaciones'
    },
    {
      path: '/calificaciones',
      component: AppCalificaciones
    },
    {
      path: '/registro',
      component: AppRegistro
    }
  ]
});
