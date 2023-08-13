const products = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        title: "Depeche Mode",
        album: "101",
        year: "1988",
        format: "2LP",
        condition: "Mint",
        price: 4500,
        imageUrl: "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20101.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        title: "Depeche Mode",
        album: "Songs Of Faith And Devotion",
        year: "1993",
        format: "LP",
        condition: "Mint",
        price: 5700,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Songs%20Of%20Faith%20And%20Devotion.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        title: "Depeche Mode",
        album: "Music For The Masses",
        year: "1987",
        format: "LP",
        condition: "Mint",
        price: 5800,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Music%20For%20The%20Masses.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471818",
        title: "Depeche Mode",
        album: "Black Celebration",
        year: "1986",
        format: "LP",
        condition: "Mint",
        price: 5700,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Black%20Celebration.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471819",
        title: "Depeche Mode",
        album: "Violator",
        year: "1990",
        format: "LP",
        condition: "Mint",
        price: 5900,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Violator.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471820",
        title: "Depeche Mode",
        album: "Ultra",
        year: "1996",
        format: "LP",
        condition: "Near Mint",
        price: 5100,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Ultra.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471821",
        title: "Depeche Mode",
        album: "Speak & Spell",
        year: "1981",
        format: "LP",
        condition: "Near Mint",
        price: 4600,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Speak%20%26%20Spell.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471822",
        title: "Depeche Mode",
        album: "Some Great Reward",
        year: "1984",
        format: "LP",
        condition: "Near Mint",
        price: 5700,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Some%20Great%20Reward.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471823",
        title: "Depeche Mode",
        album: "Construction Time Again",
        year: "1983",
        format: "LP",
        condition: "Mint",
        price: 4900,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Construction%20Time%20Again.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471824",
        title: "Depeche Mode",
        album: "Playing The Angel",
        year: "2005",
        format: "2LP",
        condition: "Mint",
        price: 5300,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Playing%20The%20Angel.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471825",
        title: "Depeche Mode",
        album: "Exciter",
        year: "2001",
        format: "2LP",
        condition: "Mint",
        price: 5200,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20Exciter.jpg",
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471826",
        title: "Depeche Mode",
        album: "A Broken Frame",
        year: "1982",
        format: "LP",
        condition: "Near Mint",
        price: 4600,
        imageUrl:
            "https://932610.selcdn.ru/links/Depeche%20Mode%20-%20A%20Broken%20Frame.jpg",
        bookmark: false
    }
];

// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(products);
//         }, 1000);
//     });

// export default fetchAll;

export function fetchAll() {
    return products;
}
