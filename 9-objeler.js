


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


// console.log(getUser1Name);
// console.log(gerUser1Surname);
// console.log(getUser1Age);
// console.log(getUser1Adress);
// console.log(getUser1Hoobies);
// console.log(getUser1Hoobies2);
// console.log(`kullanici adi : ${getUsers}`);
// console.log(urun1);




// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



/*
    1- Siparis bilgilerini objeler icinde sakla
    2- Her siparsin ayri ayri kdc dahil odenen ucretini hesapla (kdv%18)
    3- tum siparsilerin kdv dahil odenen ucreti hesapla


    siparis id      : 101
    siparis tarihi  : 31.12.2021
    odeme sekli     :  kredi karti
    kargo adresi    : uskudar istanbul
    satin alinan urunler :
        urun id : 5
        urun basligi : iphone 13
        urun url : https://www.apple.com/tr/iphone-13/
        urun fiyati : 15000

        urun id : 6
        urun basligi : iphone 13 pro
        urun url : https://www.apple.com/tr/iphone-13-pro/
        urun fiyati : 18000

    musteri :
        musteri id : 12

    satici : 
        firma id : 34
        firma adi : apple turkiye

------------------------------------------------------------------------------------------------------------------------------------------------
    siparis id      : 102
    siparis tarihi  : 01.01.2022
    odeme sekli     :  alisveris kredisi 
    kargo adresi    : kadiykoy istanbul
    satin alinan urunler :
        urun id : 6
        urun basligi : iphone 13 pro
        urun url : https://www.apple.com/tr/iphone-13/
        urun fiyati : 18000

        u

    musteri :
        musteri id : 12

    satici : 
        firma id : 34
        firma adi : apple turkiye


    


*/

let siparis1 = {
    'siparisId': 101,
    'siparisTarihi': '31.12.2021',
    'odemeSekli': 'kredi karti',
    'kdvliFiyat' : 'urunFiyati' * 1.18,
    'kargoAdresi': {
        'ilce': 'uskudar',
        'sehir': 'istanbul',
        'mahalle': 'kuzguncuk'
    },
    'satinAlinanUrunler': [
        {
            'myUrunId' : 5,
            'myUrunAdi' : 'iphone 13',
            'myUrunFiyati' : 15000,
            'myUrunUrl' : 'https://www.apple.com/tr/iphone-13/'
        
    },
        {
            'myUrunId' : 6,
            'myUrunAdi' : 'iphone 13 pro',
            'myUrunFiyati' : 20000,
            'myUrunUrl' : 'https://www.apple.com/tr/iphone-13-pro/'
        }
    ]
    
}

let siparis2 = {
    'siparisId': 103,
    'siparisTarihi': '01.12.2021',
    'odemeSekli': 'alisveris kredisi karti',
    'kargoAdresi': {
        'ilce': 'uskudar',
        'sehir': 'istanbul',
        'mahalle': 'kuzguncuk'
    },
    'satinAlinanUrunler': [
        {
            'myUrunId' : 6,
            'myUrunAdi' : 'iphone 13 pro',
            'myUrunFiyati' : 20000,
            'myUrunUrl' : 'https://www.apple.com/tr/iphone-13-pro/'
        },
    ],
    
    
}

let siparisler = [siparis1,siparis2];
let siparis1ToplamFiyat = siparis1.satinAlinanUrunler[0].myUrunFiyati + siparis1.satinAlinanUrunler[1].myUrunFiyati * 1.18;
let siparis2ToplamFiyat = siparis2.satinAlinanUrunler[0].myUrunFiyati * 1.18;    

let firmaninKazanci = siparis1ToplamFiyat + siparis2ToplamFiyat;     


console.log(`urun adi : ${siparisler[0].satinAlinanUrunler[0].myUrunAdi}`)
console.log(`urun fiyati :${siparisler[0].satinAlinanUrunler[0].myUrunFiyati}`);

console.log(`1. siparis icin odenen fiyat : ${siparis1ToplamFiyat}`);
console.log(`2. siparis icin odenen fiyat : ${siparis2ToplamFiyat}`);
console.log(`siparisid : ${siparisler[0].siparisId}`);
console.log(`Firmanin kazanci : ${firmaninKazanci}`);

