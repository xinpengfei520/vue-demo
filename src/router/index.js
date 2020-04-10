import Vue from 'vue'
import Router from 'vue-router'
// @符表示 src 根目录
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import MyTable from '@/components/MyTable'

Vue.use(Router)

// 导出一个默认的组件，没有给组件起名，导入的时候就可以随便起一个名字，
// 如果这个地方起名了，那个导入的时候也要用起的这个名字
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'MyTable',
      component: MyTable
    }
  ]
})
