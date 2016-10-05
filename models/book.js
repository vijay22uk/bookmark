class Book {
    constructor(name,type,desc,completePercentage,currentpage) {
     this.name = name;
     this.bType = type;
     this.desc = desc;
     this.completePercentage = completePercentage|| null;
     this.currentpage = currentpage|| null;
    }
}

module.exports = Book;