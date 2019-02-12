import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/MainLayout').default,
      children: [
        {
          path: '',
          component: require('@/components/MainLayout/Home').default
        },
        {
          path: ':pm',
          component: require('@/components/MainLayout/PackageViewer').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
