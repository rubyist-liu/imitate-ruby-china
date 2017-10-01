import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Topic from '@/components/Topic'
import Job from '@/components/Job'
import Wiki from '@/components/Wiki'
import Site from '@/components/Site'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topic
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Job
    },
    {
      path: '/wiki',
      name: 'wiki',
      component: Wiki
    },
    {
      path: '/sites',
      name: 'sites',
      component: Site
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignUp
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignIn
    }
  ]
})
