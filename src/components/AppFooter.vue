
<!---------- Script ------------>

<script>

// Import
import  { store } from '../data/store';


// logic

export default {
    data() {
        return {
            club: { store },
            
        }
    },
}

</script>








<!------------ Template ------------->

<template>
  
    <!------- Footer -------->
    <footer>

        <div class="container">

            
            <!---- Wrapper ---->
            <div class="wrapper">
                
                <!-- Left Column-->
                <div class="left-column"> 
                    
                    
                    <img src="../assets/img/logo-footer-gobike.png" alt="Logo">
                    
                    <div class="location">
                        {{ club.store.club.location }}
                    </div>
                
                    <div class="phone">
                        {{ club.store.club.phone }} 
                    </div>
                    
                    <div class="mail">
                        {{ club.store.club.mail }}
                    </div>
                    
                    <div class="socials">
                        <font-awesome-icon class="social" :icon="['fab', 'facebook-f']" />
                        <font-awesome-icon class="social" :icon="['fab', 'instagram']" />
                        <font-awesome-icon class="social" :icon="['fab', 'twitter']" />
                    </div>
                    
                </div>
                
                
                <!-- Middle Column -->
                <div class="middle-column">
                    
                    <h3>Join Our Newsletter</h3>
                    <div>Subscrive to receive useful information</div>
                    
                    <!-- Subscribe form -->
                    <SubscribeForm />
                    
                </div>
                
                
                <!-- Right Column -->
                <div class="right-column">
                    
                    
                    <!-- Training Column -->
                    <div class="training-col">
                        
                        <h3>Trainings</h3>
                        
                        <ul> <!-- TODO Dinamic-->
                            <li v-for="training in club.store.trainings" >
                                <a href="#"> {{ training.title }}</a>
                            </li>
                        </ul>
                        
                        
                    </div>
                    
                    
                    
                    <!-- Quick Links -->
                    <div class="links-col">
                        
                        
                        <h3>Quick Links</h3>
                        
                        <ul>
                            <li v-for="link in club.store.navbar">
                                <a href="#">{{ link.text }}</a>
                            </li>
                        </ul>
                        
                        
                    </div>
                    
                </div>
                
            </div>
            
            
            
            <!-- Copyright -->
            <div class="copyright">
                2023 Gobike - All Rights Reserved.
            </div>
            
            
        </div>
    </footer>
    
</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

// import
@use '../assets/scss/vars' as *;
@use '../assets/scss/mixin' as *;




footer {
    background-color: $primary-col;
    color: $secondary-col;
}

.wrapper {
    @include flexbox (space-between , flex-start);
    padding-top: 20px;
    margin-bottom: 30px;
}

// Left Column

img {
    width: 250px;
    margin-bottom: 25px;
}

.left-column {
    width: calc(100% / 3)
}

.left-column div {
    margin-bottom: 25px;
    font-size: 20px;
}


.social {
    font-size: 35px;
    padding: 10px;
    border: 1px solid gray;
    margin-right: 10px;
    cursor: pointer;
}


// Middle Column

.middle-column {
    width: calc(100% / 3);

}




// RIght Column


.right-column {
    @include flexbox (space-between , center);
    width: calc(100% / 3)
}

.training-column {
    margin-right: 100px;
}


h3 {
    margin-bottom: 40px;
}

a {
    color: $secondary-col;
    font-size: 18px;
}

li {
    margin-bottom: 20px;
}


// Copyright

.copyright {
    text-align: center;
    padding-bottom: 20px;
}

</style>