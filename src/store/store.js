import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		products: [
			{ name: 'Banana Skin', price: 20 },
			{ name: 'Shiny Star', price: 40 },
			{ name: 'Green Shells', price: 60 },
			{ name: 'Red Shells', price: 80 }
		]
	},
	getters: {
		saleProducts: state => {
			const saleProducts = state.products.map(product => ({
				name: `**${product.name}**`,
				price: product.price / 2
			}));
			return saleProducts;
		}
	},
	mutations: {
		reducePrice: (state, payload) => {
			state.products.forEach(product => {
				product.price -= payload;
			});
		}
	},
	actions: {
		reducePrice: (context, payload) => {
			setTimeout(() => {
				// reach out for data
				context.commit('reducePrice', payload);
			}, 2000);
		}
	}
});

export default store;
