// for(let i=0;i<=100;i++){
//     console.log(i);
// }

// for(let fizz=1;fizz<=10;fizz++){
//     console.log(fizz*3);
// }

// for(let i=0;i<=100;i++){
//     if(i%3==0 && i%5){
//         console.log("FizzBuzz");
//     } else
//     console.log("Fizz");
//         if(i%3==0)
//         {
//             console.log("Buzz");
//         }
//         else
//         console.log(i);
    
// }

// ! You are a given an array of cities . Each city is a string.  Write a Javascript program to find which city (string) is repeating the most in your array.

// let cities = [
//     'Pune',
//     'Chennai',
//     'Delhi',
//     'Mumbai',
//     'Ahemadabad',
//     'Delhi',
//     'Pune',
//     'Delhi',
//   ];

// let maxFreq = 0;
// let maxFreqCity = null;
// for(let i = 0; i < cities.length; i++){
//     //for each city count from start the freq
//     let cityFreq = 0;
//     let currCity = cities[i];
//     for(let j = 0; j < cities.length; j++){
//         if(currCity === cities[j]){
//             cityFreq++;
//         }
//     }
//     if(cityFreq > maxFreq){
//         maxFreq = cityFreq;
//         maxFreqCity = currCity;
//     }
// }

// console.log(`The maxFreq city is ${maxFreqCity} repeating ${maxFreq} times`);

//let arr = [1,1,0,0,1,0,1,0,1,0,1];

// function sort01(arr){
//     let nextZero = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 0){
//             //swap it with nextZero index
//             arr[i] = arr[nextZero];
//             arr[nextZero] = 0;
//             nextZero++;
//         }
//     }
//     console.log(arr);
// }



// let arr=[0,1,1,0,1,1,1,1,0];
// let sort=[];
// for(let i=0;i<=arr.length;i++){
//     if(arr[i]==0){
//         arr[i]=sort[i];
        
//     }else{
//         i++;
//     }
// }

//let city=['pune','chennai','ahmedabad','delhi','mumbai','delhi','hyderabad'];
// let cities = [
//     'Pune',
//     'Chennai',
//     'Delhi',
//     'Mumbai',
//     'Ahemadabad',
//     'Delhi',
//     'Pune',
//     'Delhi',
//   ];
// let sort=[];
// function sort(){
//     for(let i=0;i<=cities.length;i++){
//         if(city[0]==delhi)
//     }

    
    
// }

// 

//let name = "Agra";
// WAP to reverse the string

// let ans = "";
// for(let i of name){
//     ans = i + ans;
// }

// console.log(ans);

//let ans = name.split('').reverse().join('');
//console.log(ans);

// let unique=[0,1,0,1,2];
// for(let i=0;i<=unique.length;i++){
//     if(unique[i]/1>=1){
//         console.log(unique[i]);
//     }
//     else
//     console.log(i);
// }

//WAP to find the unique element in the input array
// let inp=[100,2,4,5,3,4,5,2,100];

// for(let i = 0; i < inp.length; i++){
//     let currNum = inp[i];
//     let numFreq = 0;
//     for(let j = 0; j < inp.length; j++){
//         if(currNum === inp[j]){
//             numFreq++;
//         }
//     }
//     if(numFreq === 1){
//         console.log(currNum);
//         break;
//     }
// }

//1.WAP to sort this array containing only 1,2 or 0.
let nums = [1,2,0,1,2,0,1,2,0];
let sort = [];
for(let i=0;i<= nums.length; i++){
    if(nums[i]/1>=1){
        i++;
    }else
        
    console.log(sort[i]);    
    
}
//ans [0,0,0,1,1,1,2,2,2]

//2. WAP to find the first sum pair of a given sum in a given array -- 2sum
//let arr = [1,2,3,4,5,6,7,8,9,5];
//let sum = 10;
//1,9