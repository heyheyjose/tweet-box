var React = require('react');

var TweetBox = React.createClass({

	getInitialState: function () {
		return {
			text: '',
			photoAdded: false
		}
	},

	handleChange: function (event) {
		this.setState({
			text: event.target.value
		});
	},

	togglePhoto: function (event) {
		this.setState({
			photoAdded: !this.state.photoAdded
		});
	},

	remainingChar: function () {
		if (this.state.photoAdded) {
			return 140 - 23 - this.state.text.length;
		} else {
			return 140 - this.state.text.length;
		}
	},

	render: function () {
		return (
			<div className="well clearfix">
				<textarea className="form-control" onChange={this.handleChange}></textarea>
				<br/>
				<button className="btn btn-default pull-left" onClick={this.togglePhoto}>
					{this.state.photoAdded ? "Photo Added" : "Add Photo"}
				</button>
				<button className="btn btn-primary  pull-right" disabled={this.remainingChar() === 140}>Tweet</button>
				<span className="char-count pull-right">{this.remainingChar()}</span>
			</div>
		);
	}

});

React.render(<TweetBox/>, document.getElementById('tweet-box'));
