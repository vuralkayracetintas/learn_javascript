


let myName = 'vural kayra'
let surname = 'cetintas'

let city = 'istanbul'
let nowDateYear = new Date().getFullYear()
let age = nowDateYear - 1999
let emeklilikDurumu = (65- age > 0) ? "Emeklilige " + (65-age) + " yil kaldi" : "Zaten emekli oldunuz";

let message = 'Benim adim '+myName + ' soyadim ' + surname + ' ' + city + " sehrinde yasiyorum " + age + ' yasindayim ' + (nowDateYear-2019) +' yildir yazilim sektorunde calisiyorum '
let newMessage = `Benim adim ${myName} soyadim ${surname}  ${city}  sehrinde yasiyorum ${age} yasindayim ${(nowDateYear-2019)}  yildir yazilim sektorunde calisiyorum ${emeklilikDurumu} `
// console.log(message)
// console.log(newMessage)


let kursAdi = 'Modern Javascript Kursu'

sonuc1 = kursAdi.length;
sonuc2 = kursAdi.toLowerCase();
sonuc3 = kursAdi.toUpperCase();
sonuc4 = kursAdi[1]
sonuc5 = kursAdi.slice(0,5)
sonuc6 = kursAdi.slice(5)
sonuc7 = kursAdi.slice(-5)
sonuc8 = kursAdi.slice(-5,-2)

sonuc9 = kursAdi.substring(0,5)
sonuc10 = kursAdi.substring(5)

sonuc11= kursAdi.replace('Kursu','Egitimi')
sonuc12 = kursAdi.trim()
sonuc13 = kursAdi.trimEnd()
sonuc14 = kursAdi.trimStart()

sonuc15 = kursAdi.indexOf('Javascript')
sonuc16 = kursAdi.split(' ')
sonuc16 = kursAdi.split(' ')[1]
// console.log(sonuc1)
// console.log(sonuc2)
// console.log(sonuc3)
// console.log(sonuc4)
// console.log(sonuc5)
// console.log(sonuc6)
// console.log(sonuc7)
// console.log(sonuc8)
// console.log(sonuc9)
// console.log(sonuc10)
// console.log(sonuc11)
// console.log(sonuc12)
// console.log(sonuc13)
// console.log(sonuc14)
// console.log(sonuc15)
// console.log(sonuc16)


let url = 'http://www.google.com.tr'
let kursAdi2 = 'Modern Javascript Kursu'

/*  
    1- url kac karakterlidir ?
    2- kursadi kac kelimeden olusur 
    3- url https ile basliyor mu
    4- kurs adi icinde egitimi kelimesi var mi 
    5- url ve kurs adi degiskerinii kullakarak asagidaki sekilde bir cumle olusturunuz
    http://www.google.com.tr/modern-javascript-kursu
*/


let sonuc17 = url.length
let sonuc18 = kursAdi2.split(' ').length
let sonuc19 = url.startsWith('https')
let sonuc20 = kursAdi2.indexOf('Egitimi')

if(kursAdi2.indexOf('Egitimi') > -1 ){
    console.log('verilen cumlede egitimi kelimesi geciyor'); 
}else{ 
    console.log('verilen cumlede egitimi kelimesi gecmiyor');
}

kursAdi2 = kursAdi2.toLowerCase();
kursAdi2 = kursAdi2.replace(' ','-');


sonuc21= `${url}/${kursAdi2}`

console.log(sonuc17)
console.log(sonuc18)
console.log(sonuc19)
console.log(sonuc20)
console.log(sonuc21)
