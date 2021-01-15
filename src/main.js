import Vue from 'vue'
import App from './App.vue'
import { Drag , DragItem} from '../dist/drag-for-vue.min'
Vue.use(Drag).use(DragItem)
Vue.config.productionTip = false


new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
