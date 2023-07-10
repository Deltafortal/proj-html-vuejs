
<!---------- Script ------------>

<script>

// Import
import AppHeader from './components/AppHeader.vue'


//logic

export default {
    components: {
        AppHeader
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
