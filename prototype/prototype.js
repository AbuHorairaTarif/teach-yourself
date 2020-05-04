function Person(name,age) {
    this.name = name;
    this.age = age;
    }

// Person.prototype.hello = function() {
//     console.log('Hello, ', this.name);
// }

Person.prototype = {
    hello: function() {
        console.log('Hello, '+this.name);
    },
    info: function(){
        console.log(this.name,this.age);
    }
}

console.log(Person.prototype);

var p1 = new Person('A H Tarif',28);
var p2 = new Person('AH Bhuiyan', 36);
console.log(p1);
console.log(p2);
