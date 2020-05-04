function printMe(){
    console.log('Hello, '+this.name);    
}

var obj1 = {
    name: 'A H Tarif',
    age: 27
}

var obj2 = {
    name: 'A H Bhuiyan',
    age: 32
}

// var binded1 = printMe.bind(obj1);
// var binded2 = printMe.bind(obj2);

// binded1();
// binded2();

// printMe.call(obj1);
// printMe.call(obj2);

function add(a,b) {
    return (a+b)*this.c;
}

var obj1 = {
    c: 3
}

var obj2 = {
    c: 5
}

var res1 = add.call(obj1,2,5);
res1;

var res2 = add.apply(obj2,[2,5]);
res2

var binded = add.bind(obj1);
console.log(binded(2,5));

