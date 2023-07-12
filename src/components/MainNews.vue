<!---------- Script ------------>

<script>

// Import
import  { store } from '../data/store';



// logic

export default {
    data() {
        return {
            articles: { store },
            
        }
    },
}

</script>








<!------------ Template ------------->

<template>

    <section class="packs">
        <div class="container">

            <!-- Title-->
            <div class="title">
                <h3>Resent New & Articles</h3>
                <div>Important information about bike.</div>
            </div>


            <!-- Wrapper -->
            <div class="wrapper">

                <!-- Card -->
                <div v-for="article in articles.store.articles" :kei="article.id" class="card">

                    <img :src="articles.store.methods.imgUrl(article.img)" :alt="article.title">
                    <figcaption>{{ article.date }}</figcaption>
                    <h4> {{ article.title }}</h4>
                    <p>{{ article.description }}</p>
                    <div class="button">
                        <a href="#">More</a>
                    </div>
                </div>

            </div>


        </div>
    </section>
    
</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

// import
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixin' as *;

section {
    padding-top: 40px;
    background-color: $primary-alt-col;
    padding-bottom: 80px;
}

.wrapper {
    @include flexbox(center, center);
}


.card {
    width: calc(100% / 4);
    text-align: center;
    margin: 20px;
    padding: 30px;
    border-radius: 10px;
    background-color: $secondary-col;
    box-shadow: 0px 0px 14px 1px #00000091;
}

h4 {
    color: $primary-col;
    font-size: 24px;
    margin-bottom: 25px;
    margin-top: 10px;
}

.button {
    margin-top: 28px;
}

</style>