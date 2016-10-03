module.exports = function (app) {
    var books = [
        { id: 1, name: "Physics", bType: "TEXTBOOK", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
        { id: 2, name: "Maths", bType: "TEXTBOOK", desc: "a textbook on Maths ..", completePercentage: null, currentpage: 23 },
        { id: 3, name: "Physics", bType: "NOVEL", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
        { id: 4, name: "Physics", bType: "EBOOK", desc: "a textbook on physics ..", completePercentage: null, currentpage: 22 },
    ]
    app.route('/api/books')
    .get(function(req,res) {
        res.send(books);
    })
}
