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
        ],

        specialPacks: [
            {
                title: 'Basic',
                id: 7,
                price: 1800,

                services: [
                    {
                        service: 'Phone',
                        description: 'Phone Mountaineer bike training',
                        get: true,
                    }
                    {
                        service: 'Bike service',
                        description: 'Remote excelent bike service',
                        get: true,
                    },
                    {
                        service: 'Safe cycling',
                        description: 'Onsite Safe cycling training',
                        get: true,
                    },

                    {
                        service: 'Helmet',
                        description: 'Saafety helmet on bike',
                        get: false,
                    },
                    {
                        service: 'Free for Children',
                        description: 'Free bikes for children',
                        get: false,
                    },
                ]
            },
            {
                title: 'Standard',
                id: 8,
                price: 2500,

                services: [
                    {
                        service: 'Phone',
                        description: 'Phone Mountaineer bike training',
                        get: true,
                    }
                    {
                        service: 'Bike service',
                        description: 'Remote excelent bike service',
                        get: true,
                    },
                    {
                        service: 'Safe cycling',
                        description: 'Onsite Safe cycling training',
                        get: true,
                    },

                    {
                        service: 'Helmet',
                        description: 'Saafety helmet on bike',
                        get: false,
                    },
                    {
                        service: 'Free for Children',
                        description: 'Free bikes for children',
                        get: false,
                    },
                ]
            },
            {
                title: 'Premium',
                id: 9,
                price: 5000,

                services: [
                    {
                        service: 'Phone',
                        description: 'Phone Mountaineer bike training',
                        get: true,
                    }
                    {
                        service: 'Bike service',
                        description: 'Remote excelent bike service',
                        get: true,
                    },
                    {
                        service: 'Safe cycling',
                        description: 'Onsite Safe cycling training',
                        get: true,
                    },

                    {
                        service: 'Helmet',
                        description: 'Saafety helmet on bike',
                        get: false,
                    },
                    {
                        service: 'Free for Children',
                        description: 'Free bikes for children',
                        get: false,
                    },
                ]
            },

        ]


})