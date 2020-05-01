function Book(name,author,price){
    this.name = name;
    this.author = author;
    this.price = price;
}

var book1 = new Book('Sobar Jonno C','Tamim Shariar Subeen', 200);
console.log(book1);
console.log(book1.constructor);
