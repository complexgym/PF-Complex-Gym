import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';

export default function Navbar() {
	return (
		<div className='flex flex-row  w-full h-20 bg-black '>
			<img className=' h-22 ml-40  ' src={logo} alt='' />
			<div className=' flex flex-row text-white'>
				<Link to='/home'>Inicio</Link>
				<ul>
					<li>
						<Link to='/nosotros'>Nosotros</Link>
					</li>
					<li>
						<Link to='/calendario'>Calendario</Link>
					</li>
					<li>
						<Link to='/blog'>Blog</Link>
					</li>
				</ul>
				<Link to='/planes'>Planes</Link>

				<Link to='/contacto'>Contacto</Link>

				<Link to='/perfil'>Perfil</Link>

				<Link to='/login'>Log In</Link>
			</div>
		</div>
	);
}
