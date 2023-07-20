<template>
    <header class='bg-light'>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#" @click="this.$router.push('/')">SHOP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <RouterLink to="/" class="nav-link">
                                Главная
                            </RouterLink>
                        </li>
                        <li class="nav-item" v-for="(category, index) in this.categories">
                            <RouterLink :to="'/products/category/'+category" class="nav-link">
                                {{category}}
                            </RouterLink>
                        </li>
                    </ul>
                    <div class="form-inline my-2 my-lg-0">
                        <RouterLink to="/card" class="card-link">
                            Корзина
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { getCategories } from '@/services/index.js';

    export default {
        name: "header",
        data(){
            return {
                categories: [],
            }
        },
        async created(){
            this.categories = await this.getCategories();
        },
        methods: {
            async getCategories(){
                try {
                    const response = await getCategories();
                    return response.data;
                } catch (error) {
                    return [];
                }
            }
        }
    }
</script>

<style>
    .nav-link{
        text-transform: capitalize;
    }
    .card-link{
        color: rgba(0,0,0);
    }
</style>
