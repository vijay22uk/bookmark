var React = require('react');

var BookmarkList = React.createClass({
    render:function() {
        return (<div>
       <ul className="list-group">
        {
            this.props.list.map(function (item,i) {
                console.log(item);
                return (
                   <li className="list-group-item"> { item.name }
                   <span className="badge">item.currentpage</span>
                   </li> 
                )
            })
        }
        </ul>
        </div>)
    }
});

module.exports = BookmarkList;