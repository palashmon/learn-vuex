<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';

export default {
    name: 'app',
    components: {
        'product-list-one': ProductListOne,
        'product-list-two': ProductListTwo
    },
    data() {
        return {

        };
    }
};
</script>

<style>
body {
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    line-height: 1.5;
}
</style>
