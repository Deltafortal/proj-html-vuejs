<!---------- Script ------------>

<script>

// Import
import MainIntro from '../components/MainIntro.vue'
import MainTrainings from '../components/MainTrainings.vue'



//logic
export default {
    components: {
        MainIntro , MainTrainings
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
        <News />


    </main>

</template>








<!-------------- Style ------------>

<style lang="scss" scoped>



</style>