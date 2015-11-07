var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
    start: function() {
        var number = Math.round(Math.random()*100);
    },
    render: function() {
        return (
            <button onClick={this.start}>
                Start
            </button>
        );
    }
});

var Inputer = React.createClass({
    answer: function(e) {
        if (e.keyCode === 13) {
            alert(45);
        }
    },
    render: function() {
        return (
            <input onKeyDown={this.answer}/>
        );
    }
});

ReactDOM.render(
    <CommentBox/>,
    <Inputer/>,
    document.getElementById('main')
);