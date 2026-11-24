//function showMyMessage(){
  //  console.log("hello,this is my message ");
//}
// let a=10;

// const c=30;

// in javascript we can redeclare a variable using var keyword and reaasign the value

/* var b=20;
var b=40;
console.log(b);
//by using let keyword we can reassign the value but we cannot redeclare the variable
let a=10;
a=20;
console.log(a);
// by using const keyword we cannot redeclare and reassign the value of the variable
const c=30;
//c=40;
console.log(c);

//data types in javascript
//1.primitives:number,string,boolean,null,undefined,symbol,bigint
//2.non-primitives:object,array,function

let e=10;
console.log(typeof e);
let f="hello";
console.log(typeof f);
//1.number
let g=10.5;
console.log(typeof g);
//2.string
let str="Hello World";
let str1='Hello World';
let str2=`Hello World`;
console.log(typeof str);
console.log(typeof str1);
console.log(typeof str2);

//3.boolean
let isTrue=true;

console.log(isTrue);
console.log(typeof isTrue);
//4.null
let n=null;
n=18;
console.log(n);
console.log(typeof n);
 

//5.undefined
let u;
console.log(u);
console.log(typeof u);
  
//6.symbol
let sym=Symbol("hello");
console.log(sym);
console.log(typeof sym);
//symbol is a unique and immutable primitive value and may be
//used as the key of an object property

//7.bigint
let bigInt=(1234567890123456789012345678901234567890);
console.log(bigInt);
console.log(typeof bigInt);


//non-primitives
//1.object
const obj={
    name:"John",
    age:30,
    isStudent:false,
    college:"sri eshwar college of engineering",
    address:{
        city:"Coimbatore",
        state:"Tamilnadu",
    },
    contactNumbers:[1234567890,9876543210],
}
obj.college="sree eshwar college of engineering ";
delete obj.isStudent;
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.isStudent);
console.log(obj.college);
console.log(obj.address.city);
console.log(obj.address.state);
console.log(obj.contactNumbers);     */


//array
const numbers=[1,2,3,4,5];
//let age=new Array(5);
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//built in array methods
//1.push() 
numbers.push(6);


//2.unshift
numbers.unshift(0);






for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);

}

//slice
const numbersCopy=numbers.slice(2,4);
console.log(numbersCopy);

function add(a,b){
    return a+b;
}
let a=10;
let b=20;
console.log(add(a,b));
  
function ad(name){
    console.log("hello "+name);
}
ad("Manisha");
ad("Dharshini pee");


//arrow function
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(2,3));


function greet(name,callback){
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye");
}
greet("Manisha",sayGoodbye);

//synchronous
 console.log("Task 1");
 console.log("Task 2");
 console.log("Task 3");

 //asynchronous

 console.log("Task 1");
 setTimeout(() => {
    console.log("Task 2");
    }, 2000);
 console.log("Task 3");