import {EventEmitter } from "events";
import dispatcher from "../dispatcher";
var Book = require("../models/Book");
class BookmarkStore extends EventEmitter {
    constructor() {
        super()
        this.BookList = [
            { key: 1, name: "Physics", bType: "TEXTBOOK", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
            { key: 2, name: "Maths", bType: "TEXTBOOK", desc: "a textbook on Maths ..", completePercentage: null, currentpage: 23 },
            { key: 3, name: "Physics", bType: "NOVEL", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
            { key: 4, name: "Physics", bType: "EBOOK", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
        ]
    }
    getAll() {
        return this.BookList;
    }
    createBook(book) {
        this.BookList.push(new Book(book.name, book.bType, book.desc, book.completePercentage, book.currentpage));
        // emit to componenets
        this.emit("add");
    }
    handleActions(action) {
        console.log("received an action", action);
        switch(action.type){
            case "CREATE_BOOK":{
                this.createBook({name:action.name,bType:action.bType})
            }
        }
    }

}
const bookmarkStore = new BookmarkStore();
dispatcher.register(bookmarkStore.handleActions.bind(bookmarkStore))
window.diso = dispatcher;
module.exports = bookmarkStore;