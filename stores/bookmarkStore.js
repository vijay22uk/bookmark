import {EventEmitter } from "events";
import dispatcher from "../dispatcher";
import helper from "../helpers/Resthelper";
var Book = require("../models/Book");
class BookmarkStore extends EventEmitter {
    constructor() {
        super()
        this.BookList = [];
        helper.get("api/books")
        .then(this.setData.bind(this))
    }
    setData(data){
        debugger
        this.BookList = data ;
        this.emit("change");
    }
    getAll() {
        return this.BookList;
    }
    createBook(book) {
        var _book = new Book(book.name, book.bType, book.desc, book.completePercentage, book.currentpage)
        this.BookList.push(_book);
        // emit to componenets
        this.emit("change");
        helper.post("api/books",_book)
        .then(function () {
            console.log("posted to server");
        })
    }
    deleteBook(book){
        var index = this.BookList.findIndex(function(_item) {
            return _item.id ===book.id;
        });
        this.BookList.splice(index,1);
        this.emit("change");
    }
    handleActions(action) {
        console.log("received an action", action);
        switch(action.type){
            case "CREATE_BOOK":{
                this.createBook({name:action.name,bType:action.bType})
                break;
            }
            case "DELETE_BOOK":{
                this.deleteBook(action.payload);
                  break;
            }
        }
    }

}
const bookmarkStore = new BookmarkStore();
dispatcher.register(bookmarkStore.handleActions.bind(bookmarkStore))
window.diso = dispatcher;
module.exports = bookmarkStore;