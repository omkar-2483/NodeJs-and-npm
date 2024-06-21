// console.log('hello world');

const square=require('./sqare.js')

const calsquare= (a)=>{
    console.log(`the value of a is ${a} and area is `+square.area(a));
    console.log(`the value of a is ${a} and perimeter is `+square.perimeter(a));
}
calsquare(6);

// console.log(__filename);
// console.log(__dirname);