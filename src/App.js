import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Catalog } from './pages/catalog/Catalog'
import { Favorites } from './pages/favorites/Favorites'
import { NavBar } from './components/navBar/NavBar'
import { NotFound } from './pages/notFound/NotFound'

export const App = () => {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/catalog' element={<Catalog />} />
				<Route path='/favorites' element={<Favorites />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	)
}
