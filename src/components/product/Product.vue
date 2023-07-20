<template>
    <div class="card">
        <img class="card-img-top" :src="this.image" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">{{ this.title }}</h5>
            <p
                class="card-text link"
                @click="this.$router.push('/products/category/'+this.category)"
            >
                {{ this.category }}
            </p>
            <p class="card-text">{{ this.price }}$</p>
            <span class="btn btn-primary" @click="this.$router.push('/products/'+this.id)">
                Подробнее
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        props: [
            'id',
            'title',
            'price',
            'description',
            'category',
            'image',
            'rating',
        ],
        data(){
        },
    }
</script>

<style>
    .card-img-top{
        width: 100%;
        height: 200px;
        object-fit: contain;
    }
</style>
