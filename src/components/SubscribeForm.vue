<!---------- Script ------------>

<script>


// logic

export default {
    data() {
        return {
            insertedMail : ''
        }
    },
}

</script>








<!------------ Template ------------->

<template>

    <form action="">
        <input v-model="insertedMail" type="email" name="email" id="email" placeholder="Your Email Address">
        <input type="submit" value="Subscribe" id="input-button">
    </form>

</template>








<!-------------- Style ------------>

<style lang="scss" scoped>

// import
@use '../assets/scss/vars' as *;



input {
    width: 80%;
    padding: 20px;
    border-radius: 10px;
    font-size: 22px;
}

#email {
    margin-top: 35px;
    margin-bottom: 8px;
}

#input-button {
    cursor: pointer;
}



</style>