import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import t from '@/components/t'
import te from '@/components/te'
import tes from '@/components/tes'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 't',
      // component:t,
      components: {t:t,te:te},
      children:[
      	{
			path:"",
			components:{tes,test}
      	}
      ]
    }
  ]
})
