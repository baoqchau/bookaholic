import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import BookPage from './components/BookPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={IndexPage}/>
		<Route path="book/:id" component={BookPage}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);

export default routes;
