
<!---------- Script ------------>

<script>

</script>








<!------------ Template ------------->

<template>
  
    <!---- Jumbotron ------>
    <div class="jumbotron">


        <!-- Left Arrow -->
        <div class="slider button-left">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
        </div>

        <!-- Content -->
        <div class="content">
            <h2>Dinamic Title</h2>
            <h4>Learn cycling from the pros</h4>

            <div class="button">
                <a href="#"> 
                    Learn more
                    <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </a>
            </div>

        </div>

        <!-- Right Arrow-->
        <div class="slider button-right">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>



    </div>
    
</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

//Import
@use '../assets/scss/mixin' as *;
@use '../assets/scss/vars' as *;


.jumbotron {
    height: 800px;
    background-image : url(../assets/img/slider-bike-12.jpg);
    background-size: cover;
    @include flexbox(space-between, center);
}


h2 {
    font-size: 69px;
    margin-bottom: 13px;
}

h4 {
    font-size: 21px;
    margin-bottom: 25px;
}

.slider {
    color: $secondary-col;
    background-color: $primary-col;
    padding: 15px 20px;
    font-size: 25px;
    border-radius: 10px;
    text-align: center;
}

.button-left {
    margin-left: 25px;
}


.button-right {
    margin-right: 25px;
}


.content {
    flex-basis: 65%;
}

</style>