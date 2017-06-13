# testrouter
测试 嵌套路由http://router.vuejs.org/zh-cn/essentials/nested-routes.html

一个router-view包含同级的t.vue和te.vue，te.vue下又包含tes.vue和test.vue

同级，conponents：{tem1，tem2}
嵌套，children:[]


export default new Router({
  routes: [
    {
      path: '/',
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
