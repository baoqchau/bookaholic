import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import BooksMenu from './BooksMenu';
import books from '../data/books';
import Review from './Review';

export default class BookPage extends React.Component {
	render() {
		const id = this.props.params.id;
		const book = books.filter((book) => book.id === id)[0];
		if (!book){
			return <NotFoundPage/>;
		}
		return (
			<div className="book-full">
				<BooksMenu/>
				<div className="book">
					<div className="picture-container">
						<img src={`${book.cover}`}/>
						<h2 className="title">{book.title}</h2>
					</div>
					<section className="author">
						<p>Author: {book.author} </p>
					</section>
					<section className="reviews">
						<p> This book has <strong>{book.reviews.length}</strong> reviews:</p>
						<ul>{
							book.reviews.map((review, i) => <Review key={i} {...review}/>)
						}</ul>
					</section>
				</div>
				<div className="navigateBack">
					<Link to="/"> Back to the index </Link>
				</div>
			</div>
		);
	}
}
