// function Person() {
//     this.name = "A H Tarif"
// }

// function Teacher() {
//     Person.call(this);
//     this.subject = "Javascript";
// }

// var teacher = new Teacher();

// var name = teacher.name;
// console.log(name);

function Person(name){
    this.name = name;
}

Person.prototype.printName = function() {
    console.log('Name: '+ this.name);
}

function Student(name,id) {
    Person.call(this,name);
    this.id = id;
}

// Student.prototype = Object.create(Person.prototype);

Object.setPrototypeOf(Student.prototype,Person.prototype);

Student.prototype.constructor = Student;

var student = new Student('Abu Horaira', 1204);

Person.prototype.printName = function() {
    console.log(this.name+ ' not copied');
}

Person.prototype.skill = 'Javascript';
