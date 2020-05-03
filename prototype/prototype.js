// function Person(name,age){
//     this.name = name;
//     this.age = age;

//     this.hello = function() {
//         console.log('Hello' + this.name);        
//     }
function Person(name,age){
    this.name = name;
    this.age = age;
    }
    // Person.prototype.hello = function() {
    //     console.log('Hello, ' + this.name);
    // }

    // Person.prototype.print = function(){
    //     console.log(this.name,this.age);
    // }

    Person.prototype = {
        hello: function(){
            console.log('Hello, '+this.name);
        },
        print: function(){
            console.log(this.name,this.email);  
        },
        email: 'shared@email.com'
    }
    
    var p1 = new Person("Abu Horaira", 24);
    var p2 = new Person("Abul Hasnat", 28);
    

    console.log(p1);
    console.log(p2);