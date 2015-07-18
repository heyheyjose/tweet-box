var React = require('react');

var App = React.createClass({
	render() {
		return <h1>This is going to be a Twitter tweet box</h1>;
	}
})

React.render(<App/>, document.getElementById('example'));
