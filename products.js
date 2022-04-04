/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
    };
  },
  methods: {
    getProducts: function () {
      axios.get("http://localhost:3000/products.json").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");

// Make a GET request to http://localhost:3000/products and display the products on the page.
// Make a POST request to http://localhost:3000/products to create a new product.
// Make a PATCH request to http://localhost:3000/products/:id to update an individual product.
// Make a DELETE request to http://localhost:3000/products/:id to destroy an individual product.
