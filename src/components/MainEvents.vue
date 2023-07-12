<!---------- Script ------------>

<script>

//Import
import  { store } from '../data/store';

export default {
    data() {
        return {
            events: { store },
            from: '',
            to: ''
        }
    },
    methods: {
        getFromDate(event) {
            const { from } = event;
            this.from = `${from.year}-${from.month}-${from.day}  ${from.hours}`
            return this.from;
        },

        getToDate(event) {
            const { to } = event;
            this.to = `${to.year}-${to.month}-${to.day}  ${to.hours}`
            return this.to;
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
                <div v-for="event in events.store.events" :key="event.id" class="card">

                    <div class="label">
                        <div class="day">{{ event.label.day }}</div>
                        <div class="mon">{{ event.label.month }}</div>
                    </div>

                    <img src="../assets/img/event1.jpg" :alt=" event.title">

                    <!-- Content -->
                    <div class="content">

                        <h4> {{ event.title }}</h4>
                        <div class="date">
                            <span> {{ getFromDate(event) }}</span>
                            <span> {{ getToDate(event) }}</span>
                        </div>
                        <div> {{ event.location }} </div>
                        <div v-for="tag in event.tags" :key="tag" class="tag"> 
                            <span>{{ tag }}</span>
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

.section {
    height: 800px;
}
.container {
    margin-top: 100px;
}

.wrapper {
    @include flexbox(center, center);
    flex-wrap: wrap;
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
    font-size: 18px;
    margin-bottom: 10px;
    color: rgb(117, 117, 117);

    span {
        margin-right: 10px;
    }
}

.tag {
    margin-top: 15px;
    
    span {
        padding: 5px;
        border-radius: 5px;
        background-color: rgb(218, 218, 218);
    }
}

</style>