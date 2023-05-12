
let toplam =0;

for(let i = 1; i<=10; i++){
    //console.log(i);
    toplam +=i;
}

console.log(toplam);
console.log('-------------------');

let sayilar = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i<sayilar.length; i++){
    console.log(sayilar[i]);        
}
console.log('-------------------');
for (let i = 0; i<6; i++){
    console.log(sayilar[i]);        
}console.log('-------------------');


let toplam_sonuc = 0;

for (let i = 0; i< sayilar.length; i++){
    toplam_sonuc += sayilar[i];
}


console.log(toplam_sonuc);

console.log('-------------------');




let numbers = [1,2,6,2,1,6,5,7,9,3,12]

for(let index in numbers ){
    console.log(index);
}
console.log('-------------------');

for(let number of numbers ){
    console.log(number);
    toplam += number;
}
console.log('-------------------');
console.log(toplam);



let users = {
    'name' : 'yigit',
    'surname' : 'yuce',
    'password' : 12345,
    'email' : 'yigityuce@mail.com'

}
console.log('-------------------');

for (let key in users){
    console.log(`${key} : ${users[key]}`);
    
}
