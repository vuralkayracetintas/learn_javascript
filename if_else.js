


let userName = "vkc"
let userPassword = 1234;
if(userName == 'vkc'){
    if(userPassword==1234){     
        console.log('hosgeldin',userName)
    }else{
        console.log('yanlis sifre')
    }
}else{
    console.log('kullanici adi ve sifre yanlis')
}



// yas > 18 
// mezuniyet  == lise yada mezuniyet == universite

let yas = 20;
let mezuniyet = 'universite';
if((yas > 18) && (mezuniyet == 'lise')){
    console.log('ehliyet alabilir')
}else{
    console.log('ehliyet alamazsiniz')
}

// and 
// true - true = true
// true - false = false
if((yas > 18) && ((mezuniyet == 'lise' || mezuniyet == 'universite'))){
    console.log('ehliyet alabilir')
}else{
    console.log('ehliyet alamazsiniz')
}


/*
    1- Bir sayinin 10-50 arasinda olup olmadigini kontrol et
    2- Bir sayinin pozitif tek sayi olup olmadigini kontrol et
    3- x ,y,z sayilarinin buyukluk karsilastirmasini yap 
    4- 2 vize.ve 1 final notuna gore ortalama icin 
        a) eger ortalama 50 ve ustuneyse gecti degilse kaldi 
        b) gecnek icin ortalama 50 olsa bile final notu en az 50 olmali
        c) finalden 70 aldiginda ortalama 50 nin altindaysa dersten gecsin 

*/ 



let verilenSayi = 40
if((verilenSayi>10 && verilenSayi<50 )){
    console.log('sayi 10 dan buyuk 50 den kucuk secilen sayi : ',verilenSayi)
}else{
    console.log('verilen sayi sartlari saglamiyor')
}


let sayiTekMi = 40
if((sayiTekMi%2 == 1 && sayi>0)){
    console.log('sayi tek ve pozitif')
}else if (sayiTekMi%2 == 0 && sayi>0){
    console.log("sayi pozitif fakat tek degil");
}else{
    console.log("sayi cift");
}

let x = 30, y = 40,z = 50
if(x>y && x>z){
    console.log('x en buyuk deger')
}else if(y>x && y>z){
    console.log('y en buyuk deger')
}else if(z>x && z>y){
    console.log('z en buyuk deger')
}else{
    console.log('sayilar esit')
}


let vize1 = 50, vize2 = 60, final = 49

let ortalama = (((vize1+vize2)/2) *0.4) + (final*0.6)

console.log('ortalama : ',ortalama)

if(ortalama>=50){
    console.log('dersten gecti')    

}else{    
    console.log('dersten kaldi')
}  


if(ortalama>=50 && final>=50){
    console.log('dersten gecti')    

}else{    
    console.log('dersten kaldi')
}  

if(ortalama>=50 || final>=70){
    console.log('dersten gecti')    

}else{    
    console.log('dersten kaldi')
}  


