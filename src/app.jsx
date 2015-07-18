var React = require('react');

var TweetBox = React.createClass({

	getInitialState: function () { // this "special" function sets up the initial state of a component and runs only once during the lifecycle of the component
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

	overflowAlert: function () {
		if (this.remainingChar() < 0) {
			if (this.state.photoAdded) {
				var beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
				var overflowText = this.state.text.substring(140 - 23);
			} else {
				var beforeOverflowText = this.state.text.substring(140 - 10, 140);
				var overflowText = this.state.text.substring(140);
			}

			return (
				<div className="alert alert-warning">
					<strong>Oops! Too Long:</strong>
					&nbsp;...{beforeOverflowText}
					<strong className="bg-danger">{overflowText}</strong>
				</div>
			);

		} else {
			return '';
		}
	},

	render: function () {
		return (
			<div className="well clearfix">
				{this.overflowAlert()}
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
