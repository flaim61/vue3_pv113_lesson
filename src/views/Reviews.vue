<template>
    <div class="review p-3 border rounded mb-4" v-for="(review, index) in this.reviews">
        <h4>
            {{ review.theme }}
        </h4>
        <div class="mb-3">
            {{ review.email }}
        </div>
        <p class="mb-0">
            {{ review.text }}
        </p>
    </div>

    <div class="review-form p-3 border rounded">
        <div class="form-group">
            <label for="exampleFormControlInput1">Email</label>
            <input v-model="this.email" type="email" class="form-control" placeholder="name@example.com">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">Тема отзыва</label>
            <input v-model="this.theme" type="text" class="form-control" placeholder="Тема">
        </div>
        <div class="form-group">
            <label>Текст</label>
            <textarea v-model='this.text' class="form-control" rows="3"></textarea>
        </div>
        <div class="d-flex justify-content-end">
            <span class="btn btn-primary" @click="createReview">
                Отправить
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'review',
        data(){
            return {
                theme: "",
                text: "",
                email: "",
                reviews: [
                    {theme: "Тестовый отзыв 1", text: "Тестовый отзыв 1 текст", email: "example@example.com"},
                    {theme: "Тестовый отзыв 1", text: "Тестовый отзыв 1 текст", email: "example@example.com"},
                    {theme: "Тестовый отзыв 1", text: "Тестовый отзыв 1 текст", email: "example@example.com"},
                ],
            }
        },
        methods: {
            createReview(){
                this.reviews.push({theme: this.theme, text: this.text, email: this.email});
                this.theme = "";
                this.text = "";
                this.email = "";
            }
        }
    }
</script>

<style>
</style>
