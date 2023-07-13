
<!---------- Script ------------>

<script>

// Import
import AppHeader from './components/AppHeader.vue'
import AppJumbotron from './components/AppJumbotron.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'



//logic

export default {
    components: {
        AppHeader , AppJumbotron , AppMain, AppFooter
    },
    methods : {
        onCursorMove(e) {

            const cursor = document.querySelector('.cursor');

            const mouseY = e.clientY;
            const mouseX = e.clientX



            cursor.style.transform = `translate3d(${mouseX - 20}px, ${mouseY -20}px, 0)`;

        }
    },
    created:
        function() {
            window.addEventListener('mousemove', this.onCursorMove);
        },
    
    destroyed: {
        function() {
            window.removeEventListener('mousemove', this.onCursorMove);
        }
    }
}

</script>








<!------------ Template ------------->

<template>

    <!-- Cursor -->
    <div class="cursor">

    </div>
  
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
