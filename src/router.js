import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/steps',
      name: 'steps',
      component: () => import(/* webpackChunkName: "about" */ './views/Steps.vue')
    },

    {
      path: '/menu/plantbased', 
      name: 'plantbased',
      component: () => import(/* webpackChunkName: "about" */ './views/Plantbased.vue')
    },

    {
      path: '/menu/zerowaste', 
      name: 'waste',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Zerowaste.vue')
    },
    {
      path: '/habits',
      name: 'habits',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Habits.vue')
    },


    {
      path: '/menu/biophilia', 
      name: 'biophilia',
      component: () => import(/* webpackChunkName: "about" */ './views/Biophilia.vue')
    },

    {
      path: '/menu/advocacy', 
      name: 'advocacy',
      component: () => import(/* webpackChunkName: "about" */ './views/Advocacy.vue')
    },

    {
      path: '/menu/minimalism', 
      name: 'minimalism',
      component: () => import(/* webpackChunkName: "about" */ './views/Minimalism.vue')
    },

    {
      path: '/menu/copositive', 
      name: 'copositive',
      component: () => import(/* webpackChunkName: "about" */ './views/Copositive.vue')
    }

  ]
})
