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

        ],

        trainings: [
            {
                title: 'Riding Lesson',
                id: 10,
            },
            {
                title: 'Safe Driving',
                id: 11,
            },
            {
                title: 'Mountain Bike',
                id: 12,
            },
            {
                title: 'Trail Drive',
                id: 13,
            },
            {
                title: 'Pedaling',
                id: 11,
            },

        ],

        events: [
            {
                title: 'Toronto Cycling Event 2023',
                label: {
                    day: '22',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '22',
                    hours: '01:30'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '11',
                    hours: '07:00'
                },
                location: 'Toronto',
                tags: ['Bycicle Race'],
                id: 12,

            },
            {
                title: 'Instanbul Cycling Event 2023',
                label: {
                    day: '30',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '30',
                    hours: '01:30'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '17',
                    hours: '03:30'
                },
                location: 'Instanbul',
                tags: ['Bike Sport'],
                id: 13,

            },
            {
                title: 'Paris Cycling Event 2023',
                label: {
                    day: '22',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '22',
                    hours: '07:30'
                },
                to: {
                    year: '2023',
                    month: '04',
                    day: '14',
                    hours: '16:30'
                },
                location: 'Paris',
                tags: ['Cycling Tour'],
                id: 14,

            },
            {
                title: 'New Jersey Cycling Event 2023',
                label: {
                    day: '25',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '25',
                    hours: '03:00'
                },
                to: {
                    year: '2023',
                    month: '04',
                    day: '14',
                    hours: '05:30'
                },
                location: 'New Jersey',
                tags: ['Bicycle Race'],
                id: 15,

            },
            {
                title: 'London Cycling Event 2023',
                label: {
                    day: '28',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '28',
                    hours: '07:30'
                },
                to: {
                    year: '2023',
                    month: '03',
                    day: '18',
                    hours: '12:00'
                },
                location: 'London',
                tags: ['Bike Sport'],
                id: 16,

            },
            {
                title: 'Kiev Cycling Event 2023',
                label: {
                    day: '29',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '29',
                    hours: '10:00'
                },
                to: {
                    year: '2023',
                    month: '04',
                    day: '07',
                    hours: '04:30'
                },
                location: 'Kiev',
                tags: ['Bicycle Race'],
                id: 17,

            },
            {
                title: 'Colorado Cycling Event 2023',
                label: {
                    day: '28',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '28',
                    hours: '04:00'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '24',
                    hours: '05:30'
                },
                location: 'Colorado',
                tags: ['Bike Sport'],
                id: 18,

            },
            {
                title: 'Amsterdam Cycling Event 2023',
                label: {
                    day: '28',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '28',
                    hours: '10:30'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '11',
                    hours: '10:30'
                },
                location: 'Amsterdam',
                tags: ['Bicycle Race'],
                id: 19,

            },
            {
                title: 'Toronto Cycling Event 2023',
                label: {
                    day: '22',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '22',
                    hours: '09:30'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '14',
                    hours: '17:30'
                },
                location: 'Toronto',
                tags: ['Bicycle Race'],
                id: 20,

            },
            {
                title: 'Paris Cycling Event 2023',
                label: {
                    day: '26',
                    month: 'JUN'
                },
                from: {
                    year: '2022',
                    month: '06',
                    day: '26',
                    hours: '05:30'
                },
                to: {
                    year: '2023',
                    month: '08',
                    day: '22',
                    hours: '14:00'
                },
                location: 'Paris',
                tags: ['Bicycle Race'],
                id: 21,

            },
        ],
        
        trainers: [
            {
                name: 'Michael Lee',
                role: 'Biker',
                id: 22,
            },
            {
                name: 'Robert Lee',
                role: 'Biker',
                id: 23,
            },
            {
                name: 'John Doe',
                role: 'Biker',
                id: 24,
            },
            {
                name: 'Emily Brown',
                role: 'Biker',
                id: 25,
            },
        ],

        articles: [
            {
                date: '22.06.2022',
                title: 'Road bike or Mountain bike?',
                description: 'Compared to similar road bikes with a solid frame structure, [...]',
                id: 26,
            },
            {
                date: '22.06.2022',
                title: 'What is mountain biking called?',
                description: 'Mountain bike is one of the most popular outdoor sports, [...]',
                id: 27,
            },
            {
                date: '22.06.2022',
                title: 'How much should you cycle a day?',
                description: 'In order to get the right benefits from the exercice, [...]',
                id: 28
            },
            {
                date: '22.06.2022',
                title: 'How long does it take 5 km by bike',
                description: 'It takes 5 km and 10 minutes, sir, But at, [...]',
                id: 29
            },
        ],

        club: {
            location: 'New Jersei, USA',
            phone: '+1 (234) 567 89 10',
            mail: 'aldolucchetta21@gmail.com',
            id: 30,
        },


})