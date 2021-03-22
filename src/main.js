import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const EventBus = new Vue();

export default EventBus;
new Vue({
  render: h => h(App),
}).$mount('#app')
