
<!---------- Script ------------>

<script setup>

</script>








<!------------ Template ------------->

<template>
  
    <!------- Footer -------->
    <footer>


        <!---- Wrapper ---->
        <div class="wrapper">

            <!-- Left Column-->
            <div class="left-column"> <!-- TODO Dinamic -->
                
                
                <img src="" alt="Logo">
                
                <div class="location">
                    New Jersei, USA
                </div>
                
                <div class="phone">
                    +1 (234) 567 89 10 
                </div>
                
                <div class="mail">
                    example@example.com
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
                        <li>Riding Lesson</li>
                    </ul>

                    
                </div>
                
                
                
                <!-- Quick Links -->
                <div class="links-col">
                    
                    
                    <h3>Quick Links</h3>
                    
                    <ul> <!-- TODO DInamic -->
                        <li>Home</li>
                    </ul>
                    
                    
                </div>
                
            </div>
            
        </div>
        


        <!-- Copyright -->
        <div class="copyright">
            Gobike - All Rights Reserved.
        </div>


    </footer>
    
</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

// Import
@use './assets/scss/style.scss'


</style>