

let sonuc;

sonuc = 10;
sonuc = '20'

sonuc = Number('50');
sonuc = parseInt('11');
sonuc = parseFloat('10.6');

sonuc = isNaN('10');

let sayi= 14.612313;

sonuc = sayi.toPrecision(3); // 3 basamakli deger dondurur
sonuc = sayi.toFixed(2); // 2 basamakli ondalikli deger dondurur
sonuc = Math.round(2.5); // yuvarlama islemi 
sonuc = Math.ceil(2.2) ; // her durumda yukari yuvarlama
sonuc = Math.floor(2.4) ; // her durumda asagi yuvarlama
sonuc = Math.sqrt(25); // karekokunu alma 
sonuc = Math.pow(2,4); // ussunu alma
sonuc = Math.abs(-100); // mutlak degerini alma
sonuc = Math.min(2,256,32,125,1) // min degeri bulma
sonuc = Math.max(2,256,32,125,1) // max degeri bulma 
sonuc = Math.random() // 0 ile 1 arasinda rastgele sayi uretir
sonuc = Math.random() * 10; // 0 ile 10 arasinda rastgele sayi uretir
sonuc = Math.floor(Math.random() * 10); // 0 ile 10 arasinda rastgele tam sayi uretir ve yuvarlar

console.log(sonuc);
console.log(typeof sonuc);