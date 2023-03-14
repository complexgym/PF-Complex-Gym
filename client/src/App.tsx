import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={''} element={''}></Route>
				<Route path={'/home'} element={<Home />}></Route>
				<Route path={''} element={''}></Route>
				<Route path={''} element={''}></Route>
			</Routes>
      	<Footer/>
		</div>
	);
}
export default App;
