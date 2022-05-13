export const state = () => ({
    users: [
        {
            id: 'mikhailjr',
            firstName: 'Mikhail',
            username: 'mikhailjr',
            avatar: '/avatar5.png',
            registrationDate: 'Jul 09, 2021',
            selledAmount: 10,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ],
            following: 10,
            followers: 23,
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            backgroundImage: '/backProfileImage.jpg',
            discordLink: '',
            telegramUsername: '',
            isFollowedByYou: false,
            // achievements: {

            // }
        },
        {
            id: 'antoniojr',
            firstName: 'Antonio',
            username: 'antoniojr',
            avatar: '/avatar2.png',
            registrationDate: 'Sep 12, 2021',
            selledAmount: 13,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ],
            following: 33,
            followers: 55,
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            backgroundImage: '/backProfileImage.jpg',
            discordLink: '',
            telegramUsername: '',
            isFollowedByYou: false,
        },
        {
            id: 'alexjr',
            firstName: 'Alex',
            username: 'alexjr',
            avatar: '/avatar3.png',
            registrationDate: 'May 1, 2021',
            selledAmount: 20,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ],
            following: 12,
            followers: 100,
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            backgroundImage: '/backProfileImage.jpg',
            discordLink: '',
            telegramUsername: '',
            isFollowedByYou: false,
        },
        {
            id: 'johnjr',
            firstName: 'John',
            username: 'johnjr',
            avatar: '/avatar4.png',
            registrationDate: 'Jan 21, 2021',
            selledAmount: 14,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ],
            following: 44,
            followers: 35,
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            backgroundImage: '/backProfileImage.jpg',
            discordLink: '',
            telegramUsername: '',
            isFollowedByYou: true,
        },
        {
            id: 'donaldmaen',
            firstName: 'Donald',
            username: 'donaldmaen',
            avatar: '/avatar.png',
            registrationDate: 'Jul 19, 2021',
            selledAmount: 9,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ],
            following: 102,
            followers: 233,
            rank: 'super seller',
            bio: `
            I love, I hate, I'm losing my mind. It's 
            'cause I'm in the loony bin I love, I hate, 
            I'm losing my mind It's 'cause, 'cause,
            cause I'm crazy
            `,
            backgroundImage: '/backProfileImage.jpg',
            discordLink: '',
            telegramUsername: '',
            isFollowedByYou: true,
        },
    ],
    leaderboard: [
        {
            id: 'mikhailjr',
            firstName: 'Mikhail',
            username: 'mikhailjr',
            avatar: '/avatar5.png',
            registrationDate: 'Jul 09, 2021',
            selledAmount: 10,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ]
        },
        {
            id: 'antoniojr',
            firstName: 'Antonio',
            username: 'antoniojr',
            avatar: '/avatar2.png',
            registrationDate: 'Sep 12, 2021',
            selledAmount: 13,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ]
        },
        {
            id: 'alexjr',
            firstName: 'Alex',
            username: 'alexjr',
            avatar: '/avatar3.png',
            registrationDate: 'May 1, 2021',
            selledAmount: 20,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ]
        },
        {
            id: 'johnjr',
            firstName: 'John',
            username: 'johnjr',
            avatar: '/avatar4.png',
            registrationDate: 'Jan 21, 2021',
            selledAmount: 14,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ]
        },
        {
            id: 'donaldmaen',
            firstName: 'Donald',
            username: 'donaldmaen',
            avatar: '/avatar.png',
            registrationDate: 'Jul 19, 2021',
            selledAmount: 9,
            workingPlaces: [
                {
                    name: 'Figma',
                    image: '/figma.png'
                },
                {
                    name: 'Yandex',
                    image: '/yandex.png'
                },
            ]
        },
    ]
})