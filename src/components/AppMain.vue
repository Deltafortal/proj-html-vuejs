<!---------- Script ------------>

<script>

// Import
import MainIntro from '../components/MainIntro.vue'
import MainTrainings from '../components/MainTrainings.vue'
import MainEvents from '../components/MainEvents.vue'
import MainTrainers from '../components/MainTrainers.vue'
import MainPacks from '../components/MainPacks.vue'
import MainNews from '../components/MainNews.vue'



//logic
export default {
    components: {
        MainIntro , MainTrainings , MainEvents , MainTrainers , MainPacks , MainNews
    }
}

</script>








<!------------ Template ------------->

<template>
  
    <!------- Main -------->
    <main>


        <!-- Intro -->
        <MainIntro />



        <!-- Trainings -->
        <MainTrainings />



        <!-- Events -->
        <MainEvents />


        <!-- Trainers-->
        <MainTrainers />



        <!-- Packs -->
        <MainPacks />


        <!-- News -->
        <MainNews />


    </main>

</template>








<!-------------- Style ------------>

<style lang="scss" scoped>



</style>