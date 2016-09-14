import dispatcher from "../dispatcher";

export function createBook(name, btype) {
    dispatcher.dispatch({
        type: "CREATE_BOOK",
        name: name,
        btype: btype
    })
}

export function deleteBook(id) {
    dispatcher.dispatch({
        type: "DELETE_BOOK",
        id:id
    })
}