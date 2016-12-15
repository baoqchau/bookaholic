import React from 'react';
import { Link } from 'react-router';

export default class BookPreview extends React.Component {
	render() {
		return (
			<Link to={`/book/${this.props.id}`}>
				<div className="athlete-preview">
					<img width="128" height="128" src={`${this.props.cover}`}/>
					<h2 className="title">{this.props.title}</h2>
					<span className="rating"> {this.props.rating} </span>
				</div>
			</Link>
		);
	}
}
