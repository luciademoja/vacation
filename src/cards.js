export const cards = () => {
    const allCards = {};
    for (let i = 0; i < days.length; i++) {
        allCards['showCard' + i] = false
    }
    allCards.showCard = false;
    allCards.setImage = 0;
    return allCards;
};

export const days = [
    {
        date: 24,
        fullDate: 'Tue Jul 24 2018',
        day: 'Tue',
        location: 'Pisa',
        image: 'https://thumbs.dreamstime.com/b/pisa-stad-50184928.jpg',
        full: true,
        itinerary: {
            thingsToDo: [
                'Go out and have fun :D'
            ],
            map: 'https://www.google.se/maps?q=pisa&biw=1300&bih=705&um=1&ie=UTF-8&sa=X&ved=0ahUKEwixvezJnKbcAhXJYZoKHZ3-AuwQ_AUICygC'
        },
        usefulLinks: [
            {
                url: 'https://trip101.com/article/things-to-do-pisa-at-night',
                name: '8 things to do in Pisa'
            }
        ]
    },
    {
        date: 25,
        fullDate: 'Wed Jul 25 2018',
        day: 'Wed',
        location: 'La Spezia and Portovenere',
        full: true,
        itinerary: {
            thingsToDo: [
                'Meet Anna'
            ],
            transportation: 'https://www.lefrecce.it/B2CWeb/search.do?parameter=searchOutputViewer&cFID=LQwW3E3muprb',
            map: 'https://www.google.se/maps/dir/La+Spezia,+Italien/Portovenere+La+Spezia,+Italien/@44.0813732,9.7909193,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x12d4fcc0baf15ead:0x323287ad285a4f80!2m2!1d9.8240826!2d44.1024504!1m5!1m1!1s0x12d4fc3d9a57c911:0x65c8e3a00ba75615!2m2!1d9.836628!2d44.0541257',
        }
    },
    {
        date: 26,
        fullDate: 'Tue Jul 17 2018',
        day: 'Thu',
        location: 'Firenze and Siena',
        full: false
    },
    {
        date: 27,
        day: 'Fri',
        location: 'Calabria',
        full: false
    },
    {
        date: 28,
        day: 'Sat',
        location: 'Calabria',
        full: false
    },
    {
        date: 29,
        day: 'Sun',
        location: 'Calabria',
        full: false
    },
    {
        date: 30,
        day: 'Mon',
        location: 'Calabria',
        full: false
    },
    {
        date: 31,
        day: 'Tue',
        location: 'Sicilia',
        full: false
    },
    {
        date: 1,
        day: 'Wed',
        location: 'Sicilia',
        full: false
    },
    {
        date: 2,
        day: 'Thu',
        location: 'Napoli',
        full: false
    },
    {
        date: 3,
        day: 'Fri',
        location: 'Napoli',
        full: false
    },
    {
        date: 4,
        day: 'Sat',
        location: 'Roma',
        full: false
    },
    {
        date: 5,
        day: 'Sun',
        location: 'Roma',
        full: false
    },
    {
        date: 6,
        day: 'Mon',
        location: 'Amsterdan',
        full: false
    },
    {
        date: 7,
        day: 'Tue',
        location: 'Amsterdam',
        full: false
    },
    {
        date: 8,
        day: 'Wed',
        location: 'Amsterdam',
        full: false
    },
    {
        date: 9,
        day: 'Thu',
        location: 'Amsterdam',
        full: false
    },
    {
        date: 10,
        day: 'Fri',
        location: 'Amsterdam',
        full: false
    },
    {
        date: 11,
        day: 'Sat',
        location: 'Göteborg',
        full: false
    },
    {
        date: 12,
        day: 'Sun',
        location: 'Göteborg',
        full: false
    }
];