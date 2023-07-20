<template>
    <div class="row">
      <div v-for='(product, index) in this.products' class="product-card col-lg-3 col-md-4 col-sm-12">
          <Product
              :id="product.id"
              :title="product.title"
              :image="product.image"
              :description="product.description"
              :category="product.category"
              :price="product.price"
          />
      </div>
    </div>
  </template>

  <script>
      import Product from "@/components/product/Product.vue"
      import { getProductsByCategory } from "@/services/index.js"

      export default {
          name: "Home",
          components: {
              Product
          },
          data(){
              return {
                  products: [],
              }
          },
          async created(){
              this.products = await this.getProductsByCategory();
          },
          methods: {
              async getProductsByCategory(){
                  try {
                      const response = await getProductsByCategory(this.$route.params.category);
                      console.log(response)
                      return response.data;
                  } catch (error) {
                      console.log(error)
                      return [];
                  }
              }
          },
          watch: {
            '$route.params.category': {
                immediate: true,
                async handler() {
                    this.products = await this.getProductsByCategory();
                },
            },
          },
      }

  </script>

  <style>
      .product-card{
          margin-bottom: 30px;
      }
  </style>
