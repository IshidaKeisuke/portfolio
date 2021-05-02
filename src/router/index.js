import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'
import Search from '../views/Search.vue'
import Searchresult from '../views/Searchresult.vue'
import NotFound from '../views/404.vue'
import store from '../store/index'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/SignUp',
    name:'SignUp',
    component:SignUp
  },{
    path:'/Login',
    name:'Login',
    component:Login
  },{
    path:'/Search',
    name:'Search',
    component:Search
  },{
    path:'/Searchresult/:text',
    name:'Searchresult',
    component: Searchresult,
    props:true  
  },{
    path:'*',
    name:'notFound',
    component:NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  if(
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ){
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
})
export default router
