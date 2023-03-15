import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { useAuth0 } from '@auth0/auth0-react';
import LoginBtn from '../LoginBtn/LoginBtn';

export default function Navbar() {
	const { logout } = useAuth0();

	const { user, isAuthenticated, isLoading } = useAuth0();

	console.log(user);

	return (
		<div className='fixed z-30 flex flex-row  w-full h-20 bg-black bg-opacity-90 justify-between '>
			<img className=' h-22 ml-40  ' src={logo} alt='logo' />
			<div className=' flex flex-row text-white gap-16 items-center mr-10  '>
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

				<LoginBtn />

				{isAuthenticated && (
					<div>
						<img
							className=' rounded-full max-w-[40px]'
							src={user.picture}
							alt={user.name}
						/>
						<ul>
							<li>
								<Link to='/perfil'>Perfil</Link>
							</li>
							<li>
								<button
									onClick={() =>
										logout({ logoutParams: { returnTo: window.location.origin } })
									}
								>
									Log out
								</button>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
