var React = require('react');
var action = require("../actions/book");
var Bookmark = React.createClass({
    deleteBook(e){
        e.preventDefault();
        action.deleteBook(this.props.item);
    },
    render: function () {
        return (
            <li className={ "list-group-item " + this.props.item.bType}> { this.props.item.name }
                <span className="badge">{this.props.item.currentpage}</span>
                <span className="badge" onClick={this.deleteBook}>&times;</span>
            </li>)
    }

});

module.exports = Bookmark;