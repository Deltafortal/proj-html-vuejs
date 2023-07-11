import { reactive } from 'vue';


export const store = reactive({

        navbar: [
            {
                text: 'Home',
                id: 1,
            },
            {
                text: 'About Us',                    
                id: 2,
            },
            {
                text: 'Trainings',
                id: 3,
            },
            {
                text: 'Packages',                    
                id: 4,
            },
            {
                text: 'Blog',                    
                id: 5,
            },
            {
                text: 'Contact',                    
                id: 6,
            },
        ]


})