

let ogrenciler = ['cinar','ali','murat'];

sonuc = ogrenciler.length; // dizideki elemanlarin uzunlugu

// array to string
sonuc = ogrenciler.toString(); // diziyi stringe cevirir
sonuc = ogrenciler.join(' ');


// eleman silme 
//sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri dondurur.
//sonuc = ogrenciler.shift(); // ilk eleman silinir

// eleman ekleme
sonuc = ogrenciler.push('sena') // dizinin sonuna eleman ekler .
sonuc = ogrenciler.unshift('emel') // dizinin basina eleman ekler.


let markalar1 = ['mazda','toyota'];
let markalar2 = ['bmw','mercedes'];
let markalar3 = ['audi'];

//sonuc = markalar1.concat(markalar2,markalar3); // dizileri birlestirir.
sonuc = markalar1.splice(0,0,'audi'); // dizinin istenilen yerine eleman ekler.
sonuc = markalar1.splice(0,1,'audi'); // dizinin istenilen yerine eleman siler.



// console.log(sonuc);
// console.log(ogrenciler);
// console.log(markalar1);



// Dizi Ornekleri 

/*
    1- Elma armut muz cilek elemanlarina sahul bir dizi olustur,
    2- Dizi kac elemanlidir ekrana yazdir.
    3- dizinin ilk ve son elemani nedir ? 
    4- elma dizinin bir elamani midir ? 
    5- kiraz meyvesini listenin sonuna ekleyiniz 
    6- dizinin son 2 elemanini siliniz 
    7- asagidaki bilgileri dizi icerisinde saklayiniz ve her ogrencinin yasini hesaplayiniz

            Ogrenci 1 : yigit bilgi 2010 (70,60,80)
            Ogrenci 2 : ada bilgi 2012 (80,80,90)
            Ogrenci 3 : ahmet bilgi 2009 (60,60,70)

*/

let meyveler = ['elma','armut','muz','cilek']

let meyveSayisi = meyveler.length;
let ilkMeyve = meyveler[0];
let sonMeyve = meyveler[meyveSayisi -1 ]
let elmaKontrol = meyveler.includes('elma');
let elmaKontrol2 = meyveler.indexOf('elma');
let kirazEkle = meyveler.push('kiraz');
let son2ElemanSil = meyveler.splice(meyveler.length -2,2);

console.log(meyveSayisi);
console.log(ilkMeyve);
console.log(sonMeyve);
console.log(elmaKontrol);
console.log(elmaKontrol2);
console.log(meyveler);
console.log(son2ElemanSil);


let ogr1 = ['yigit','bilgi',2010,[70,60,80]];
let ogr2 = ['ada','bilgi',2012,[80,80,90]];
let ogr3 = ['ahmet','bilgi',2009,[60,60,70]];

let students =[ogr1,ogr2,ogr3]

let ogr1Yas = new Date().getFullYear() - students[0][2];
let ogr2Yas = new Date().getFullYear() - students[1][2];
let ogr3Yas = new Date().getFullYear() - students[2][2];

let ogr1NotOrt = (students[0][3][0] + students[0][3][1] + students[0][3][2]) / 3;
let ogr2NotOrt =( students[1][3][0] + students[1][3][1] + students[1][3][2]) / 3;
let ogr3NotOrt =( students[2][3][0] + students[2][3][1] + students[2][3][2]) / 3;

console.log(ogr1NotOrt.toFixed(1), ogr2NotOrt.toFixed(1), ogr3NotOrt.toFixed(1));

console.log(ogr1Yas);
console.log(ogr2Yas);
console.log(ogr3Yas);

