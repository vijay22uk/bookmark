class Book {
    constructor(name,type,desc,completePercentage,currentpage) {
     this.name = name;
     this.type = type;
     this.desc = desc;
     this.completePercentage = completePercentage|| null;
     this.currentpage = currentpage|| null;
     this.key = Date.now();
    }
}

module.exports = Book;