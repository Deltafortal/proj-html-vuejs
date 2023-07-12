<!---------- Script ------------>

<script>



</script>








<!------------ Template ------------->

<template>

  
    <section class="training">
        <div class="container">


            <!-- Title -->
            <div class="title">
                <h3>Our professional Cycling Trainings</h3>
                <div>Learn from the mountain bike expert</div>
            </div>

            <!-- Wrapper -->
            <div class="wrapper">

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/training-box-1.jpg" alt="training">
                    <div class="content">
                        <h4>Riding lesson</h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/training-box-1.jpg" alt="training">
                    <div class="content">
                        <h4>Riding lesson</h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/training-box-1.jpg" alt="training">
                    <div class="content">
                        <h4>Riding lesson</h4>
                    </div>
                </div>

                <!-- Card -->
                <div class="card">
                    <img src="../assets/img/training-box-1.jpg" alt="training">
                    <div class="content">
                        <h4>Riding lesson</h4>
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


.container {
    text-align: center;
}

h3 {
    font-size: 35px;
    margin-top: 70px;
    margin-bottom: 30px;
}

.title {
    margin-bottom: 34px;
}

.wrapper {
    @include flexbox(center, center);

}

.card {
    position: relative;
    margin-left: 20px;
}

img {
    border: 10px solid $primary-col;
}

.content {
    background-color: rgba(29, 29, 30, 0.39);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

h4 {
    font-size: 23px;
    position: absolute;
    top: 20px;
    left: 20px; 
}
</style>