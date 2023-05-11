


let now = new Date();

// Get Methods
sonuc = now;
sonuc = now.getDay(); // 0-6 arasi gunler
sonuc = now.getDate(); //gun 
sonuc = now.getFullYear(); // yil
sonuc = now.getHours(); // saat
sonuc = now.getTime(); // milisaniye cinsinden zaman

// Set Methods

let toYear = now.getFullYear(2023);
now.setMonth(3);
now.setDate(15);   

let dogumTarihi = new Date(1999, 9, 15,);

sonuc = toYear- dogumTarihi.getFullYear();


console.log(sonuc);