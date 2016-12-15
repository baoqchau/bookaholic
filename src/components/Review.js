import React from 'react';

export default class Review extends React.Component {
	render() {
		return (
			<li className="review">
				<span className="user">{this.props.user}</span>
				<span className="comment"> <strong>commented</strong> {this.props.comment}</span>
			</li>
		);
	}
}
