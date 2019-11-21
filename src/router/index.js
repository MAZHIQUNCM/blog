import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/front/Article'
import Home from '@/components/front/Home'
import About from '@/components/front/About'
import Catalog from '@/components/front/Catalog'
import Others from '@/components/front/Others'
import ErrorPage from '@/components/front/ErrorPage'
import Login from '@/components/front/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Article
    }, 
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorPage
    },
    {
      path: '/others',
      name: 'Others',
      component: Others
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    { path: '*', redirect: '/home' } 
    
  ]
})
