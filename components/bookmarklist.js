var React = require('react');
var Bookmark = require('./bookmark')
var bookstore = require("../stores/BookmarkStore");
var BookmarkList = React.createClass({
    getInitialState() {
        return {
            list: bookstore.getAll()
        }
    },
    render: function () {
        return (<div>
            <ul className="list-group">
                {
                    this.state.list.map(function (item, i) {
                        console.log(item);
                        return (
                            <Bookmark item={item} key={"item" + i} />
                        )
                    })
                }
            </ul>
            { this.props.allowAdd ?
                <div className="add-book">
                    <form className="form-inline">
                        <input className="form-control"/>
                        <select className="form-control">
                            <option>Select Option</option>
                            <option></option>
                        </select>
                        <button className="btn btn-success">Add</button>
                    </form>
                </div>
                : null
            }
        </div>)
    }
});

module.exports = BookmarkList;