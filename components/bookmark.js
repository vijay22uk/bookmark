var React = require('react');

var Bookmark = React.createClass({
    render: function () {
        return (
            <li className={ "list-group-item " + this.props.item.bType}> { this.props.item.name }
                <span className="badge">{this.props.item.currentpage}</span>
            </li>)
    }

});

module.exports = Bookmark;