<!---------- Script ------------>

<script>

// Import
import  { store } from '../data/store';



// logic

export default {
    data() {
        return {
            trainers: { store },
            
        }
    },
}

</script>








<!------------ Template ------------->

<template>

    <section class="trainers">
        <div class="container">

            <!-- Title-->
            <div class="title">
                <h3>Our Expert Trainers</h3>
                <div>Learn to ride a bike from the experts.</div>
            </div>


            <!-- Wrapper -->
            <div class="wrapper">

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/biker1.jpg" alt="">

                    <div class="content">
                        <h4>Michael</h4>
                        <div class="role">Biker</div>
                        <div class="socials">

                        </div>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/biker1.jpg" alt="">

                    <div class="content">
                        <h4>Michael</h4>
                        <div class="role">Biker</div>
                        <div class="socials">

                        </div>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/biker1.jpg" alt="">

                    <div class="content">
                        <h4>Michael</h4>
                        <div class="role">Biker</div>
                        <div class="socials">

                        </div>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/biker1.jpg" alt="">

                    <div class="content">
                        <h4>Michael</h4>
                        <div class="role">Biker</div>
                        <div class="socials">
                            <font-awesome-icon class="social" :icon="['fab', 'facebook-f']" />
                            <font-awesome-icon class="social" :icon="['fab', 'instagram']" />
                            <font-awesome-icon class="social" :icon="['fab', 'twitter']" />
                        </div>
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
    margin-top: 40px;
    background-color: $primary-alt-col;
}

.wrapper {
    @include flexbox(center, center);
    margin-bottom: 50px;
}

.container {
    padding-top: 5px;
}

.card {
    background-color: $primary-col;
    margin-right: 40px;
    text-align: center;
}

h4 {
    font-size: 24px;
    margin-top: 20px;
}

.role {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 12px;
    color: rgb(119, 119, 119);
}

.socials {
    font-size: 17px;
    color: $secondary-col;
}

.social {
    margin: 15px;
}

img {
    width: 320px;
}

</style>