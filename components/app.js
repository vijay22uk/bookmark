var React = require('react');
var BookmarkList = require('./bookmarklist');

var App = React.createClass({
    getInitialState() {
        return {
            allowAdd:true
        }
    },
    toggleAdd(e){
        debugger
        var _value = e.target.checked;
        this.setState({allowAdd : _value}) ;
    },
    render: function () {
            return (<div className ="container-fluid"> <h1> React h20   
            <input type="checkbox"  checked={this.state.allowAdd} onChange={this.toggleAdd}/>
            </h1>
            <BookmarkList allowAdd = {this.state.allowAdd} list={[]} /> 
            </div>);
    }

});
module.exports = App;