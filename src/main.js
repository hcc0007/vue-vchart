import Vue from 'vue'
import App from './App.vue'
import VCharts from 'v-charts'
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
