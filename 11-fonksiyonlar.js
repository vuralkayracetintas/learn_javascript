

function selamlama(msg){
    console.log(msg);
}

selamlama('merhaba');
selamlama('hello');
selamlama('hi');
selamlama(3);
selamlama(); // undefined

console.log('-------------------');

function yasHesapla(dogumYili){
     return new Date().getFullYear() - dogumYili;
}

yasHesapla(1999);
yasHesapla(2000);
yasHesapla(2010);


function emeklilikHesapla(dogumYili , isim){
    yas = yasHesapla(dogumYili);
    kalansene = 65-yas;
    if(yas>65){
        console.log(`zaten emeklisiniz `);
    }
    else{
        console.log(`${isim} emekli olamaz yasiniz ${yas} ${kalansene} yil sonra emekli olabilirsiniz.`);
    }
}

emeklilikHesapla(1999,'yigit');
emeklilikHesapla(1950,'hasan');