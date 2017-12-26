import Vue from 'vue';
import App from './App.vue';
import store from './store/store';

// Set this to false to prevent the production tip on Vue startup.
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	// provide the store using the "store" option.
	// this will inject the store instance to all child components.
	store,
	render: h => h(App)
});
