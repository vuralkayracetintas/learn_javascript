
// let toplam =0;

// for(let i = 1; i<=10; i++){
//     //console.log(i);
//     toplam +=i;
// }

// console.log(toplam);
// console.log('-------------------');

// let sayilar = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i<sayilar.length; i++){
//     console.log(sayilar[i]);        
// }
// console.log('-------------------');
// for (let i = 0; i<6; i++){
//     console.log(sayilar[i]);        
// }console.log('-------------------');


// let toplam_sonuc = 0;

// for (let i = 0; i< sayilar.length; i++){
//     toplam_sonuc += sayilar[i];
// }


// console.log(toplam_sonuc);

// console.log('-------------------');




// let numbers = [1,2,6,2,1,6,5,7,9,3,12]

// for(let index in numbers ){
//     console.log(index);
// }
// console.log('-------------------');

// for(let number of numbers ){
//     console.log(number);
//     toplam += number;
// }
// console.log('-------------------');
// console.log(toplam);



// let users = {
//     'name' : 'yigit',
//     'surname' : 'yuce',
//     'password' : 12345,
//     'email' : 'yigityuce@mail.com'

// }
// console.log('-------------------');

// for (let key in users){
//     console.log(`${key} : ${users[key]}`);
    
// }



let sayiListesi = [1,5,7,15,3,25,20,10,2]

// 1- sayilar listesindeki her elemanin karesini alalim

for(let sayi of sayiListesi){
    console.log('sayilarin karesi : ' + sayi*sayi);
    
    
}
console.log('-------------------')
// 2- sayilar listesindeki hangi sayilar 5 in katidir.

for(let i=0; i<sayiListesi.length; i++){
    if(sayiListesi[i]%5==0){
        console.log('5 in katlari : ' + sayiListesi[i]);    
    }
}
console.log('-------------------')
// 3- sayilar listesindeki cift sayilarin toplamini bul

let toplam = 0;
for(let i=0; i<sayiListesi.length; i++){
    if(sayiListesi[i]%2==0){
        toplam += sayiListesi[i];    
    }
}
console.log('cift sayilarin toplami : ' + toplam);  


console.log('-------------------')
let urunler = ['iphone 13','iphone 12','iphone 11','iphone 10','samsung s22']

// 4- urunler listesindeki tum urunleri buyuk harf ile yazdir
for(let urun in urunler){
    console.log('urunler : ' + urunler[urun].toUpperCase());
}
// 5- urunler listesinde icinde samsung gecen urun var mi kontrol et
let adetSayisi = 0
for(let urun of urunler){
    if(urun.includes('samsung')){
        adetSayisi ++;
        
    }


}
console.log('samsung urun sayisi ' + adetSayisi);
let ogrenciler = [
    {'name':'yigit','surname':'yuce','notlar':[50,60,90]},
    {'name':'ahmet','surname':'yuce','notlar':[20,25,100]},
    {'name':'mehmet','surname':'yuce','notlar':[10,80,65]},
]

console.log('-------------------')
// ogrenciler listesindeki her ogrencinin not ortalamasini hesapla

for(let ogrenci of ogrenciler){
    let toplam = 0;
    for(let not of ogrenci.notlar){
        toplam += not;
    }
    console.log('ogrenci not ortalamasi : ' + toplam/ogrenci.notlar.length);
}
// tum ogrencilerin not ortalamasi kactir 

console.log('-------------------')
for(let ogrenci of ogrenciler){
    let not_ortalama =0;
    let ortalama = 0;
    let adet = 0;
    for(let not of ogrenci.notlar){
        not_ortalama += not;
        adet++;
    }
    ortalama = not_ortalama/adet;  
    console.log(`${ogrenci.name} ${ogrenci.surname} not ortalamasi : ${ortalama}`)

    if(ortalama>+50){
        console.log(`basarili`)
    }else{
        console.log(`basarisiz`)
    }
     
}