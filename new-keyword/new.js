function Animal(name){
    this.name = name;
}

Animal.prototype.printName = function() {
    console.log(this.name);    
}

function myNew(constructor){
    var obj = {};
    Object.setPrototypeOf(obj,constructor.prototype);
    // console.log(arguments);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj,argsArray.slice(1));
    return obj;
}

var cat = myNew(Animal,'cat');
cat.printName();

var Person = function(name,age) {
    this.name = name;
    this.age = age;
}

var p1 = myNew(Person,"Abu Horaira", 25);

// var cat = new Animal('Cat');
// var dog = new Animal('Dog');

// cat.printName();