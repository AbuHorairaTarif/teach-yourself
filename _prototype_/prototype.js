function P1(a,b) {
    this.a = a;
    this.b = b;
}

function Obj2(a, b, c) {
    P1.call(this, a, b);
    this.c = c;
}

Obj2.prototype = Object.create(P1.prototype);

function Obj3() {
    Obj2.call(this,10,20,30);
}

Obj3.prototype = Object.create(Obj2.prototype);

var obj2 = new Obj2(4,5,6);

var obj3 = new Obj3();
console.log(obj3.a);