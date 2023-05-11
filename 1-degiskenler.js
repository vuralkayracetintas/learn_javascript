

//Degisken : Icerisinde her turden bilgiyi tutabilen bir yapidir.

// var : Standart degisken tanimlama keywordu.
// let : Blok tabanli yerel degisken tanimlama keywordu.
// const : Blok tabanli sabit degisken tanimlama keywordu.
/*
Degisken isimlendirme kurallari
    -Degisken isimleri anlamli olmali
    -turkce karakterler kullanilamaz
    -bosluk kullanilamaz
    -sayi ile baslayamaz
    -birden fazla kelime kullanilacaksa camelCase yada snake_case kullanilabilir.
    -buyuk kucuk harf duyarlidir
    -alt cizgi ve dolar isareti kullanilabilir
    -ozel kelimeler kullanilamaz
    -ayni degisken adi degisken ifadelerinde kullanilamaz
*/


var a = "Mehmet <br>";
let b = "Ahmet";
const c = "Ayse";
var maasMehmet = 4000;
var maasAhmet = 5000;
var maasAyse = 6000;
var yapilacakZam = 0.35;

// document.write(a);
// document.write(b);
// document.write(c);
// document.write(maasAhmet + (maasAhmet * yapilacakZam))
// document.write( maasMehmet + (maasMehmet * yapilacakZam))    
// document.write( maasAyse + (maasAyse * yapilacakZam))

console.log(a);
console.log(b);
console.log(c);
console.log(maasAhmet + (maasAhmet * yapilacakZam))
console.log( maasMehmet + (maasMehmet * yapilacakZam))
console.log( maasAyse + (maasAyse * yapilacakZam))


let sayi1 = 10;
let sayi2 = 20;

console.log(sayi1 + sayi2);
console.log(sayi1.toString() + sayi2.toString());

let ad = "Mehmet";
let soyad = "Kara";
console.log(ad + " " + soyad);


let sinavNotu =70;
let basariliMi =(sinavNotu >= 50);

console.log(basariliMi);



/*
1- Iki ogrencinin asagididaki bilgilerini degisken icerisinde saklayiniz.
    ogrenci1
        Adi : Mehmet
        dogum tarihi : 2012
        ders notlari = 70, 80, 90
    ogrenci2
        Adi : Ahmet
        dogum tarihi : 2010
        ders notlari = 50, 60, 90

2- ogrencinin yas bilgilerini degisken icinde tutunuz.
3- ogrencinin ders notlarini degisken icinde sakla
4- ogrencinin 50 gecme notuna gore basarili olup olmadigini degisken icinde sakla

*/
let bulundugumuzYil = new Date().getFullYear();

let gecme_notu = 50;
let ogr1_ad = "Mehmet Kara";
let ogr1_dogum = 2012;
let ogr1_ders1 = 70;
let ogr1_ders2 = 80;
let ogr1_ders3 = 90;
let ogr1_yas = bulundugumuzYil - ogr1_dogum;
let ogr1_ders_ortalama = (ogr1_ders1 + ogr1_ders2 + ogr1_ders3) / 3;
let ogr1_basariliMi = (ogr1_ders_ortalama >= gecme_notu);

let ogr2_ad = "Ahmet Kara"; 
let ogr2_dogum = 2010;
let ogr2_ders1 = 50;
let ogr2_ders2 = 60;
let ogr2_ders3 = 90;
let ogr2_yas = bulundugumuzYil - ogr2_dogum;
let ogr2_ders_ortalama = (ogr2_ders1 + ogr2_ders2 + ogr2_ders3) / 3;
let ogr2_basariliMi = (ogr2_ders_ortalama >= gecme_notu);



console.log(bulundugumuzYil)
console.log('1.ogrenci yasi : ', ogr1_yas)
console.log('2.ogrenci yasi : ', ogr2_yas)
console.log('1.ogrenci ders ortalamasi : ', ogr1_ders_ortalama, ogr1_basariliMi)
console.log('2.ogrenci ders ortalamasi : ', ogr2_ders_ortalama,ogr2_basariliMi)









