<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.name">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
        <button @click="reducePrice(4)">Reduce Price</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {};
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        // mix the getters into computed with object spread operator
        ...mapGetters(['saleProducts'])
    },
    methods: {
        ...mapActions([
            // Mounts the "reducePrice" action to `this.reducePrice()`.
            'reducePrice'
        ])
    }
};
</script>

<style scoped>
#product-list-one {
    background: #cac531; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f3f9a7, #cac531);
    background: linear-gradient(to right, #f3f9a7, #cac531);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul {
    padding: 0;
}
#product-list-one li {
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
#product-list-one li:hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
}
.price {
    font-weight: bold;
    color: #e8800c;
}
</style>
