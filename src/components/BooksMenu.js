import React from 'react';
import { Link } from 'react-router';
import books from '../data/books';

export default class BooksMenu extends React.Component {
	render() {
		return (
			<nav className="books-menu">
				{books.map(menuBook => {
					return <Link key={menuBook.id} to={`/book/${menuBook.id}`} activeClassName="active">
						{menuBook.title}
					</Link>;
				})}
			</nav>
		);
	}
}
