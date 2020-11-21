import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import { Input,Row,Col,Button,Card,Checkbox } from 'element-ui';


Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Card)
Vue.use(Checkbox)







new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
