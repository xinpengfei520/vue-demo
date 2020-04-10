// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
/**
 * 创建 Vue 实例，来挂载 app
 * router 是简写的，实际是 router: router，它是通过 import router from './router' 导入进来的
 * 如果属性名和属性值同名，那么就可以简写成一个
 */
new Vue({
  el: '#app',
  router,
  // 组件，这里的 App 也是简写，实际是：App: App
  components: { App },
  // 模板，长什么样呢？就是用了 <App/> 这个组件
  template: '<App/>'
})
