var obj = {
    name: 'Abu Horaira',

    print: function() {
        console.log(this.name);
    }
}

function myFunc() {

    function inner(){
        console.log(this);
    }
    new inner();
}

obj.print();