<!---------- Script ------------>

<script>

//Import
import  { store } from '../data/store';

export default {
    data() {
        return {
           

        }
    }
   
}

</script>








<!------------ Template ------------->

<template>

  
    <section class="events">
        <div class="container">


            <!-- Title-->
            <div class="title">
                <h3>Don't Miss Our Events!</h3>
                <div>Get the amazing cycling experience.</div>
            </div>



            <!-- Wrapper -->
            <div class="wrapper">

                <!-- Card -->
                <div class="card">

                    <div class="label">
                        <div class="day">22</div>
                        <div class="mon">JUN</div>
                    </div>

                    <img src="../assets/img/event1.jpg" alt="Event">

                    <!-- Content -->
                    <div class="content">

                        <h4>Toronto</h4>
                        <div class="date">
                            <span>ora</span>
                            <span>ora</span>
                        </div>
                        <div>location</div>
                        <div class="tag"></div>
                    </div>

                </div>

                <!-- Card -->
                <div class="card">

                    <div class="label">
                        <div class="day">22</div>
                        <div class="mon">JUN</div>
                    </div>

                    <img src="../assets/img/event1.jpg" alt="Event">

                    <!-- Content -->
                    <div class="content">

                        <h4>Toronto</h4>
                        <div class="date">
                            <span>ora</span>
                            <span>ora</span>
                        </div>
                        <div>location</div>
                        <div class="tag"></div>
                    </div>

                </div>

                <!-- Card -->
                <div class="card">

                    <div class="label">
                        <div class="day">22</div>
                        <div class="mon">JUN</div>
                    </div>

                    <img src="../assets/img/event1.jpg" alt="Event">

                    <!-- Content -->
                    <div class="content">

                        <h4>Toronto</h4>
                        <div class="date">
                            <span>ora</span>
                            <span>ora</span>
                        </div>
                        <div>location</div>
                        <div class="tag"></div>
                    </div>

                </div>

                <!-- Card -->
                <div class="card">

                    <div class="label">
                        <div class="day">22</div>
                        <div class="mon">JUN</div>
                    </div>

                    <img src="../assets/img/event1.jpg" alt="Event">

                    <!-- Content -->
                    <div class="content">

                        <h4>Toronto</h4>
                        <div class="date">
                            <span>ora</span>
                            <span>ora</span>
                        </div>
                        <div>location</div>
                        <div class="tag">tag</div>
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

.section {
    height: 800px;
}
.container {
    margin-top: 100px;
}

.title {
    text-align: center;
    margin-top: 100;
    margin-bottom: 40px;
}
.wrapper {
    @include flexbox(center, center);
    flex-wrap: wrap;
}


h3 {
    font-size: 30px;
    margin-bottom: 15px;
}

.card {
    position: relative;
    width: calc(100% / 3 - 30px);
    border: 1px solid rgb(218, 218, 218);
    border-radius: 10px;
    margin-left: 30px;
    margin-bottom: 30px;
}

.label {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 15px;
    background-color: $secondary-col;
    border-radius: 10px;
}

.day {
    font-size: 24px;
    font-weight: 500;
}

.mon {
    font-size: 14px;
}

img {
    width: 100%;
}

.content {
    padding: 18px;
}

h4 {
    font-size: 24px;
    color: $primary-col;
    margin-bottom: 10px;
}
.date {
    margin-bottom: 5px;

    span {
        margin-right: 10px;
    }
}

.tag {
    margin-top: 15px;
}

</style>