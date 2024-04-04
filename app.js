//console.log('hey ninjas');

// ---------Global objects---------

// setTimeout
// setInterval
// clearInterval
// __dirname
// __filename

// --------------------------------

// setTimeout(function(){
//     console.log('3 seconds have passed.');
// }, 3000);

// var time =0;
// setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed.');
// }, 2000);

// var time =0;
// var timer=setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed.');
//     if(time>5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);

// console.log(__filename);

// --------normal function statement--------
// function sayHi(){
//     console.log('hi');
// }

// sayHi();

// --------function expression--------
// var sayBye= function(){
//     console.log('Bye');
// }
// sayBye();

// function callfunction(fun){
//     fun();
// }
// var sayBye= function(){
//     console.log('Bye');
// }
// callfunction(sayBye);

// -----Module--------
// var counter = require('./count');
// console.log(counter(['apple','ball','cat']));

// ---------Module patterns------------
// var stuff = require('./stuff');         //custome modules
// console.log(stuff.counter(['apple','ball','cat']));
// console.log(stuff.adder(5,6));
// console.log(stuff.adder(stuff.pi,5));

// ---------Event Module----------
// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent',function(mssg){
//     console.log(mssg);
// })

// myEmitter.emit('someEvent','this event was emitted.')

//-------- Utility module----------
// const { log } = require('console');
// var events = require('events');

// var util = require('util');

// var Person= function(name){
//     this.name= name;
// };

// util.inherits(Person,events.EventEmitter);

// var  john = new Person("John");
// var  paul = new Person ("Paul");
// var  george = new Person ("George");
// var people = [john,paul,george];

// people.forEach(function(person){
//     person.on('speak',function(mssg){
//         console.log(person.name + ' said:' + mssg);
//     });
// });

// john.emit('speak','hey dudes');
// paul.emit('speak','I want a curry');

//-------Read and write files-----------
var fs= require('fs');

// ------Reading synchronously-------
// var readMe= fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);

// -----Writing synchronously--------
// fs.writeFileSync('writeMe.txt',readMe);

//---- Read Asynchronously----
var readMe=fs.readFile('readMe.txt','utf8',function(err,data){
    // console.log(data);
    fs.writeFile('writeMe.txt', data);
});

// console.log('test');
