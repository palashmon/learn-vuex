# Learn Vuex

> A Vue.js project

This repo contains some simplest case examples on Vuex for learning purpose. I also add my daily logs here, about what I have learned so far to keep track of my progress.

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## DAILY LOGS

### Day 1: 19 Dec 2017

* [x] Learned about what Vuex is and why we will want to use it.
* [x] Vuex allows us to manage our app state within Vue JS very easily.
* [x] Also, created a simple vue template using vue-cli.

### Day 2: 21 Dec 2017

* [x] Created a simple vue app and passing data to child components using `props`.
* [x] This app will be used to experiment with Vuex.

### Day 3: 23 Dec 2017

* [x] Installed `vuex` to this project.

  ```bash
  npm install vuex --save
  ```

* [x] Worked on setting up a central store using `vuex`.

### Day 4: 26 Dec 2017

* [x] Learned how we can access central `vuex` [store][vuex-state] in our child components without using any `props`.
* [x] By providing the `store` option to the root instance, the store will be injected into all child components of the root and will be available on them as `this.$store`.

### Day 5: 28 Dec 2017

* [x] Learned about use-cases for [getters][getters] in `vuex`.
* [x] If more than one component needs to make use of a computed property based on store state, we can put that as "getters" in the store. It acts like a computed property for store.
* [x] Getters receives the state as their 1st argument.

  ```js
  const store = new Vuex.Store({
  	state: {
  		todos: [{ id: 1, text: '...', done: true }, { id: 2, text: '...', done: false }]
  	},
  	getters: {
  		doneTodos: state => {
  			return state.todos.filter(todo => todo.done);
  		}
  	}
  });
  ```

* [x] The getters are exposed on the `store.getters` object:
  ```js
  this.$store.getters.doneTodos; // -> [{ id: 1, text: '...', done: true }]
  ```

### Day 6: 29 Dec 2017

* [ ] TODO

<!-- All links are added here -->

[vuex-state]: https://vuex.vuejs.org/en/state.html
[getters]: https://vuex.vuejs.org/en/getters.html
