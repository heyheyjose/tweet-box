var React = require('react');

var TweetBox = React.createClass({

	render: function () {
		return (
			<div className="well clearfix">
				<textarea className="form-control"></textarea>
				<br/>
				<button className="btn btn-default pull-left">Add Photo</button>
				<button className="btn btn-primary  pull-right">Tweet</button>
				<span className="char-count pull-right"></span>
			</div>
		);
	}
	
});

React.render(<TweetBox/>, document.getElementById('tweet-box'));
