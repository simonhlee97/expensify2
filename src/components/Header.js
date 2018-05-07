import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
	<header>
		<h1>The Expensify App</h1>
		<NavLink to='/' activeClassName="is-active" exact={true}>Home</NavLink>
		<NavLink to='/create' activeClassName="is-active">Create New</NavLink>
		<NavLink to='/edit' activeClassName="is-active">Edit</NavLink>
		<NavLink to='/help' activeClassName="is-active">Help</NavLink>
	</header>
);

export default Header;