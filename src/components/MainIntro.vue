
<!---------- Script ------------>

<script>



//logic


</script>








<!------------ Template ------------->

<template>
  
    <section class="intro">
        <div class="container">

            <!-- Left Content-->
            <div class="left-content">
                <img src="https://garantiwebtasarim.com/wordpress/gobike/wp-content/uploads/2022/06/bike-player.png" alt="Cyclist">

            </div>


            <!-- Right Content-->
            <div class="right-content">

                <h3>Do you want to be a professional cyclist?</h3>
                <p>
                    We offer 6 courses of varying difficulty and beautiful scenery that cyclists of 
                    all levels can enjoy. You will learn cycling from professionals with our competent 
                    and experienced staff. You will have a lot of fun with our amazing space.
                </p>
                <img src="../assets/img/divider.jpg" alt="divider">


                <div class="ticket">
                    <div class="content">
                        <h4>Professional Team</h4>
                        <p>
                            We make you professional by adding your sincerity as well as professionalism.
                        </p>
                    </div>
                </div>

                <div class="ticket">
                    <div class="content">
                        <h4>Professional Trainings</h4>
                        <p>
                            We always ride with the best equipment, respecting nature and fun.
                        </p>
                    </div>
                </div>

                <div class="button">
                    <a href="#">
                        Get to know us
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </a>
                </div>

            </div>

        </div>
    </section>

</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

//Import
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixin' as *;


.intro {
    background-color: $secondary-col;
}


.container {
    @include flexbox(center, flex-start);
    padding-top: 55px;
}

.left-content {
    background-image: url(../assets/img/bike-circle.png);
    background-repeat: no-repeat;
    flex-basis: calc(100% / 2);
}

.right-content {
    flex-basis: calc(100% / 3);
    margin-top: 65px;
    margin-left: 30px;
}




h3 {
    font-size: 35px;
    margin-bottom: 35px;
}

p {
    margin-bottom: 25px;
}

h4 {
    color: $primary-col;
    font-size: 22px;
    margin-top: 35px;
    margin-bottom: 18px;
}

.button {
    margin-top: 20px;
}

</style>