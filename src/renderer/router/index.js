import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: require('@/components/PackageExplorer').default,
      children: [
        {
          path: 'home',
          component: require('@/components/PackageExplorer/HomeTab').default
        },
        {
          path: 'global',
          component: require('@/components/PackageExplorer/GlobalTab').default
        },
        {
          path: 'project/:id',
          component: require('@/components/PackageExplorer/ProjectTab').default
        }
      ]
    },
    {
      path: '*',
      redirect: '/global'
    }
  ]
})
