<!--------------- Script ----------------->

<script>

// Import
import  { store } from '../data/store';

export default {
    data() {
        return {
            list: { store, }

        }
    },

}


</script>








<!----------------- Template ------------------>

<template>
    <header>

        <div class="container">

            
            <!----- Icon ----->
            <div class="icon">
                <img src="../assets/img/logo-gobike.png" alt="logo">
            </div>
            
            
            
            <!---- NavBar ----->
            <nav>
                <ul>
                    <li v-for="option in list.store.navbar" :kei="option.id"><a href="#"> {{ option.text }}</a></li>
                </ul>
            </nav>
            
            
            <!---- Header Menu ---->
            <div class="header-menu">
                
                
                <!-- Hamburgher Menu-->
                <div class="hamburgher">
                    <font-awesome-icon :icon="['fas', 'bars-staggered']" />
                </div>
                
                <!-- Events Button-->

                <a href="#" class="event-btn button">
                    
                    <div>
                        Upcoming Events
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>
                    
                </a>
                
                
            </div>
            
        </div>

    </header>
</template>








<!------------------ Style ----------------->

<style lang="scss" scoped>

// Import
@use '../assets/scss/style.scss';
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixin' as *;


header {
    background-color: $secondary-col;
    height: 120px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
}


.container {
    @include flexbox(space-between , center);
    height: 100%;
}


.header-menu {
    @include flexbox(center, center);
}

img {
    width: 200px;
}


.event-btn {
    @include flexbox(center,center);
}

a {
    font-size: 21px;
    color: $primary-col;
}

ul {
    @include flexbox(center, center)
}

li {
    margin-right: 27px;
}

.hamburgher {
    font-size: 25px;
    margin-right: 30px;
}


</style>