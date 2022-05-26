var n = "zahid";
var age =21; 
var price = 100;  

console.log( typeof n, typeof age, typeof price);

var isPrime = false;
var isHot = true;

console.log(isPrime, isHot);

console.log( typeof isPrime, typeof isHot);


var password = "hello zahid WHAT is This World";

console.log(password.toLowerCase(), password.toUpperCase());
console.log(password.length);
console.log(password.indexOf("zahid"));
console.log(password.split(" "));

var num1= 10;
var num2= 20;
var num3= 30;

var total = num1 + num2 + num3;

console.log(total);


var isPrime = -10;

isPrime = Math.abs(isPrime);
console.log(isPrime);

var Prime = 10.531528;
Prime = Math.round(Prime);
console.log(Prime);

var Prime = 10.31528;
Prime = Math.ceil(Prime);
console.log(Prime);

var Prime = 10.91528;
Prime = Math.floor(Prime);
console.log(Prime);

var rand = Math.random()*200;

console.log(rand);

var rand = Math.random()*100;
rand = Math.round(rand);
console.log(rand);


var num8= 8;

if(num8>9){
    console.log("I eat rice and meat");
}

else
{
    console.log("I eat rice and vegetables");
}


//java script array with numbers
var array = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

console.log(array[3]);
array[0] =9;
console.log(array.indexOf(18));  
console.log(array[0]);

array.push(31);
console.log(array);

console.log(array.length);
array.pop();
console.log(array);

var str=["sakib","hamim","suyank"];
console.log(str);
str.push("zahid");
console.log(str);
str.pop();
console.log(str);

str.unshift("sanit");
console.log(str);


str.shift();
console.log(str);


console.log(str.slice(2));


var pe = 10;
while(pe <15)
{
    console.log(pe);
    pe++;
}

for(var i = 0; i < 10; i++)
{
    console.log(i);
}

var loopp = [1,2,3,4,5,6,7,8,9,10];

for(var i = 0; i < loopp.length; i++)
{
    console.log(loopp[i]);
}

function add()
{
    console.log("hello");
    console.log("world");
}
add();
add();
add();


function addd(num1, num2)
{
    var total = num1 + num2;
    console.log(total);
}

addd(10, 10);
addd(10, 20);


function double(num)
{
    var total = num * num;
    return total;
   
}

var run = double(10);
console.log(run);


var student = {id: 'student1', name: 'sakib', age: 21};
var student2 = {id: 'student2', name: 'hamim', age: 21};
var student3 = {id: 'student3', name: 'suyank', age: 21};

var ag = student.age;
var ag2 = student2['age'];
console.log(ag);
console.log(ag2);