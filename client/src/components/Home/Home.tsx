import image from '../../assets/image/demoFigma1.jpg';
import Carrousel from '../Carrousel/Carrousel';
import Testimonials from '../Testimonials/Testimonials';

export default function Home() {
	return (
		<div>
			<div>
				<div className='z-20 absolute text-2xl text-white w-1/2 top-1/2 left-1/4'>
					<h1>Qué es para nosotros? </h1>
					<p className='text-lg'>
						Es un centro de movimiento, especializado en preparación física deportiva,
						actividad física para la salud y estética. Contamos con valores muy sólidos
						con respecto a la formación y capacitación interna. No lo vendemos como una
						receta mágica, valoramos mucho la disciplina, constancia y dedicación
					</p>
				</div>
				<img src={image} alt='' className='relative z-10 w-full' />
			</div>
			<Carrousel />
			<Testimonials />
		</div>
	);
}
