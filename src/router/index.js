import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import H from '../components/H.vue'

Vue.use(VueRouter);
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = Router.prototype.replace
Router.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
	
     {
          path: '/',
          component: ()=>import('@/components/Index'),
          children:[
            {
              path: '/',
              name: 'Home',
              component: ()=>import('@/components/Home')
            },
            {
              path: '/Message',
              name: 'Message',
               component: ()=>import('@/components/Message')
            },
            {
              path: '/About',
              name: 'About',
               component: ()=>import('@/components/About')
            },
			{
					  path:'/H',
					  name:'H',
					  component:H
			},
            ],
            }
  ]
})
