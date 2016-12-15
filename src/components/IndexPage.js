import React from 'react';
import BookPreview from './BookPreview';
import books from '../data/books';

export default class IndexPage extends React.Component {
	render(){
		return (
			<div className="home">
				<div className="books-selector">
					{books.map(bookData => <BookPreview key={bookData.id} {...bookData} />)}
				</div>
			</div>
		);
	}
}
