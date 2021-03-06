var React = require('react');
var Bookmark = require('./bookmark')
var bookstore = require("../stores/BookmarkStore");
var action = require("../actions/book");
var BookmarkList = React.createClass({
    componentWillMount() {
        debugger
        bookstore.on('change', this.refresh);
    },
    refresh(){
        debugger
        this.setState({ list:  bookstore.getAll(),
            input:"" });
    },
    handleInputName(e) {
        this.setState({ input: e.target.value });
    },
    addBook(e) {
        e.preventDefault();
        action.createBook(this.state.input);
    },
    getInitialState() {
        return {
            list: this.props.list,
            input: ""
        }
    },
    render: function () {
        return (<div>
            <ul className="list-group">
                {
                    this.state.list.map(function (item, i) {
                        return (
                            <Bookmark item={item} key={"item" + i} />
                        )
                    })
                }
            </ul>
            { this.props.allowAdd ?
                <div className="add-book">
                    <form className="form-inline" onSubmit={this.addBook}>
                        <input className="form-control" value={this.state.input} onChange={this.handleInputName}/>
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