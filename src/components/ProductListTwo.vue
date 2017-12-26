<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in products" :key="product">
                <span class="name">{{ product.name }}</span>
                <span class="price">£{{ product.price }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    }
};
</script>

<style scoped>
#product-list-two {
    background: #00f260; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #0575e6, #00f260);
    background: linear-gradient(to right, #0575e6, #00f260);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul {
    padding: 0;
    list-style-type: none;
}
#product-list-two li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
#product-list-two li:hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
}
.price {
    font-weight: bold;
    color: #860ce8;
    display: block;
}
</style>
