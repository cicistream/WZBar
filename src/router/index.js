import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import order from '@/order'
import mine from '@/mine'
import waiting from '@/waiting'
import end from '@/end'
import battle from '@/battle'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
      	name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
    	path: '/order',
    	name:'order',
    	component:order,
    	redirect: { name: 'waiting' },
    	children:[
            {
            	path: 'waiting',
            	name: 'waiting',
            	component: waiting
            },
            {
              path: 'battle',
              name: 'battle',
              component: battle
            },
            {
            	path: 'end',
            	name: 'end',
            	component: end
            }
    	]
    },
    {
    	path: '/mine',
    	name: 'mine',
    	component: mine
    }
  ]
})
