<!---------- Script ------------>

<script>

// Import
import  { store } from '../data/store';



// logic

export default {
    data() {
        return {
            packs: { store },
            
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
                <font-awesome-icon class="pack-icon" :icon="['fas', 'medal']" />
                <h3>Special Packs</h3>
                <div>Select pricing plan to get more.</div>
            </div>


            <!-- Wrapper -->
            <div class="wrapper">

                <!-- Card -->
                <div v-for="pack in packs.store.specialPacks" :key="pack.id" class="card">
                    <font-awesome-icon class="pack-icon" :icon="['fas', 'handshake']" />
                    <h4>{{ pack.title }}</h4>

                    <div class="description">Learn to ride a bike from the professionals.</div>

                    <div class="content">
                        <ul>
                            <li v-for="service in pack.services">
                                <font-awesome-icon :icon="['fas', service.get === true ? 'check' : 'xmark']" />
                                {{ service.description }}
                            </li>
                        </ul>
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
}

.wrapper {
    @include flexbox(center, center);
}

.pack-icon {
    font-size: 56px;
    padding: 20px;
    border-radius: 15px;
    background-color: $primary-col;
    color: $secondary-col;
    margin-bottom: 30px;
    margin-top: 20px;
}

.card {
    width: calc(100% / 3);
    text-align: center;
    margin: 20px;
    background-image: linear-gradient(170deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 48%, rgba(255,255,255,1) 49%);
}

h4 {
    font-size: 24px;
    margin-bottom: 25px;
}

.description {
    color: $secondary-col;
    font-size: 18px;
    margin-bottom: 100px;
}

li {
    margin-bottom: 30px;
}
</style>