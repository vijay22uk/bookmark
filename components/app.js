var React = require('react');
var BookmarkList = require('./bookmarklist');

var App = React.createClass({
    render: function () {
            return (<div className ="container-fluid"> <h1> React h20</h1>
            <BookmarkList allowAdd = {true}/> 
            </div>);
    }

});
module.exports = App;