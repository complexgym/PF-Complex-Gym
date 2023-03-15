import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';


function App() {

	const location = useLocation()

	return (
		<div className='App'>
			{location.pathname !== '/' && <Navbar />}
			<Routes>
				<Route path={''} element={''}></Route>
				<Route path={'/home'} element={<Home />}></Route>
				<Route path={''} element={''}></Route>
				<Route path={''} element={''}></Route>
				<Route path={'*'} element={<Error404/>}></Route>
			</Routes>
      {location.pathname!=="/" && <Footer/>}

		</div>
	);
}
export default App;
