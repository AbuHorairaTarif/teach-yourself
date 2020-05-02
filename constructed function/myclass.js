function Person(name,email) {
   this.name = name;
   this.email = email;
   this.print = function() {
       console.log('Email: '+this.email);
   } 
}

var p1 = new Person("Abu Horaira","horaira@gmail.com");
var p2 = new Person("Bhuiyan Mohsin","mohsin@gmail.com");
var p3 = new Person("Dulal", "dulal@gmail.com");

var people = [p1,p2,p3];
// console.log(p1.name);
// console.log(p1.email);
// console.log(p1);
// console.log(person);

people.forEach(function(Person){
    console.log("Name : " + Person.name);
    Person.print();
});

for(var property in p1) {
    console.log('Properties = ', property);
}

