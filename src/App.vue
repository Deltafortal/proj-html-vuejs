
<!---------- Script ------------>

<script>

// Import
import AppHeader from './components/AppHeader.vue'
import AppJumbotron from './components/AppJumbotron.vue'
import AppMain from './components/AppMain.vue'



//logic

export default {
    components: {
        AppHeader , AppJumbotron , AppMain,
    }
}

</script>








<!------------ Template ------------->

<template>
  
    <!-- Header -->
    <AppHeader />





    <!-- Jumbotron -->
    <AppJumbotron />




    <!-- Main -->
    <AppMain />
  


    <!-- Footer -->
    <AppFooter />
    
</template>








<!-------------- Style ------------>

<style lang="scss">

// Import
@use './assets/scss/style.scss'


</style>
