

// function selamlama(msg){
//     console.log(msg);
// }

// selamlama('merhaba');
// selamlama('hello');
// selamlama('hi');
// selamlama(3);
// selamlama(); // undefined

// console.log('-------------------');

// function yasHesapla(dogumYili){
//      return new Date().getFullYear() - dogumYili;
// }

// yasHesapla(1999);
// yasHesapla(2000);
// yasHesapla(2010);


// function emeklilikHesapla(dogumYili , isim){
//     yas = yasHesapla(dogumYili);
//     kalansene = 65-yas;
//     if(yas>65){
//         console.log(`zaten emeklisiniz `);
//     }
//     else{
//         console.log(`${isim} emekli olamaz yasiniz ${yas} ${kalansene} yil sonra emekli olabilirsiniz.`);
//     }
// }

// emeklilikHesapla(1999,'yigit');
// emeklilikHesapla(1950,'hasan');













// 1- kendine gonderilen kelimeyi belirtilen kez ekranda yaz 
function kelimeYazdir(kelime,adet){
    for(let i = 0; i<adet; i++){
        console.log(kelime);
    }
}

kelimeYazdir('javascript ogreniyorum',5);


// 2- dikgorgenin alanini ve cevresini  hesaplayan fonksiyon yaz
function dikdortgenHesapla(kisaKenar , uzunKenar){
    let alan = kisaKenar * uzunKenar;
    let cevre = 2*(kisaKenar + uzunKenar);
    return [`dikdortgen alani : ${alan} , dikdortgen cevre ${cevre}`];
    
}

console.log(dikdortgenHesapla(5,10));


// 3- yazu tura uygulamasini fonksiyon ile yap
function yaziTura(){
    let sayi = Math.random();

    if(sayi<0.5){console.log ('yazi')}
    else{console.log('tura')}
    console.log(sayi);
}

yaziTura();

// 4- kendine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyon yaz
function tamBolenler(sayi){
    sayilar = [];
    for(let i=2; i<sayi; i++){ 
        if(sayi%i==0){
            sayilar.push(i);
        }
    } 
    return sayilar; 
}

console.log(tamBolenler(10));

console.log(tamBolenler(20));


// 5- degisken sayida parametre alan toplam isminde bir fonksiyon yaz\


function toplam(){
    let toplam = 0;
    for(let i=0; i<arguments.length; i++){
        toplam += arguments[i];
    }
    return toplam;
}
console.log(toplam(2,5,6,1))