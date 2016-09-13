var React = require('react');
var BookmarkList = require('./bookmarklist');
var iniialList = [
    {key:1, name:"Physics",type:"TEXTBOOK",desc:"a textbook on physics ..",completePercentage:null,currentpage:22},
    {key:2, name:"Maths",type:"TEXTBOOK",desc:"a textbook on Maths ..",completePercentage:null,currentpage:23},
    {key:3 , name:"Physics",type:"TEXTBOOK",desc:"a textbook on physics ..",completePercentage:null,currentpage:22},
    {key:4, name:"Physics",type:"TEXTBOOK",desc:"a textbook on physics ..",completePercentage:null,currentpage:22},
]
var App = React.createClass({

    render: function () {
            return (<div className ="container-fluid"> <h1> React h20</h1>
            <BookmarkList list={iniialList}/> 
            </div>);
    }

});
module.exports = App;