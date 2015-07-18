var React = require('react');

var TweetBox = React.createClass({

	getInitialState: function () {
		return {
			text: ''
		}
	},

	handleChange: function (event) {
		this.setState({
			text: event.target.value
		});
	},

	render: function () {
		return (
			<div className="well clearfix">
				<textarea className="form-control" onChange={this.handleChange}></textarea>
				<br/>
				<button className="btn btn-default pull-left">Add Photo</button>
				<button className="btn btn-primary  pull-right" disabled={this.state.text.length === 0}>Tweet</button>
				<span className="char-count pull-right"></span>
			</div>
		);
	}

});

React.render(<TweetBox/>, document.getElementById('tweet-box'));
