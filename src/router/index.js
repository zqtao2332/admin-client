import Vue from 'vue'
import Router from 'vue-router'
import Admin from "../components/Admin";
import NewTuany from "../components/NewTuany";
import DevelopTurany from "../components/DevelopTurany";
import ExcellentTuany from "../components/ExcellentTuany";
import Me from "../components/Me";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/new_tuany',
      name: 'NewTuany',
      component: NewTuany
    },
    {
      path: '/develop_turany',
      name: 'DevelopTurany',
      component: DevelopTurany
    },
    {
      path: '/excellent_tuany',
      name: 'ExcellentTuany',
      component: ExcellentTuany
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }

  ]
})
