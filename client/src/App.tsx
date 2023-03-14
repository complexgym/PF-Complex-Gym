import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
	return (
		<div className='App mt-2 ml-2'>
			<h1>Complex gym</h1>
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
