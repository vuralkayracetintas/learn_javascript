


let User1 = {
    'name': 'Yigit',
    'surname': 'Bilgi',
    'age': 38,
    'adress': {
        'city': 'Istanbul',
        'country': 'Turkiye'
    },
    'hobbies': ['Sinema', 'Kitap', 'Spor']

}

let User2 = {
    'name': 'Sierra',
    'surname': 'Johns',
    'age': 28,
    'adress': {
        'city': 'New York',
        'country': 'USA'
    },
    'hobbies': ['Sinema', 'Kitap', 'Spor']

}

let sonuc;

getUser1Name = User1.name;
gerUser1Surname = User1.surname;
getUser1Age= User1['age'];
getUser1Adress = User1.adress.city;
getUser1Adress2 = User1['adress']['country'];
getUser1Hoobies = User1.hobbies[0];
getUser1Hoobies2 = User1.hobbies[1];

let Users = [User1,User2];

let getUsers = Users[0].name;


let urunler = [
    {
        'urunAdi': 'iphone 13',
        'urunFiyati': 15000,
    },
    {
        'urunAdi': 'iphone 12',
        'urunFiyati': 11000,
    }
]

let urun1 = urunler[0].urunAdi;


console.log(getUser1Name);
console.log(gerUser1Surname);
console.log(getUser1Age);
console.log(getUser1Adress);
console.log(getUser1Hoobies);
console.log(getUser1Hoobies2);
console.log(`kullanici adi : ${getUsers}`);
console.log(urun1);