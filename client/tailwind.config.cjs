/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				//*** buttons ***
				'.btn': {
					padding: '3px 12px',
					border: '1px solid black',
					borderRadius: '50%',
				},
				'.btn-red': {
					backgroundColor: 'var(--primary-color)' /* red */,
					color: 'white',
				},

				//*backgrounds
				'.nav-footer': {
					backgroundColor: 'var(--nav-footer)' /* red */,
					color: 'white',
					opacity: 0.9,
				},
				'.bg-loaging': {
					backgroundColor: 'var(--bg-loaging)',
				},
				'.bg-carrousel': {
					backgroundColor: 'var(--marine-blue)',
				},
				'.bg-testimonials': {
					backgroundColor: 'var(--bg-testimonials)',
					height: 'fit-content(100vh)',
					objectFit: 'cover',
					minHeight: 'fit-content',
				},
				'.bg-card-testimonials': {
					backgroundColor: '#0c2d44',
				},
				'.bg-lighter-blue': {
					backgroundColor: '#2563eb',
				},
				'.bg-image-testimonies': {
					backgroundImage:
						"url('https://res.cloudinary.com/dpxucxgwg/image/upload/v1678908756/bg-testimonios_zr761n.png')",
					width: '100%',
					backgroundSize: 'cover',
				},
				'.bg-image-carrousel': {
					backgroundImage:
						"url('https://res.cloudinary.com/dpxucxgwg/image/upload/v1678917982/bg-carrousel_fk0my1.png')",
					width: '100%',
					minHeight: '100vh',
					backgroundSize: 'cover',
				},

				//*fonts
				'.lighter-blue': {
					color: 'var(--lighter-blue)',
					fontWeight: 'bold',
				},

				//*borders
				'.border-gold': {
					borderColor: '#aaa876',
				},
				'.border-blue': {
					borderColor: 'var(--lighter-blue)',
				},

				//*buttons
				'.btn-home': {
					color: 'var(--lighter-blue)',
					borderBottom: '3px solid var(--lighter-blue)',
					fontSize: '2rem',
					fontWeight: 'bold',
					lineHeight: '2rem',
					display: 'flex',
					justifyContent: 'center',
					transition: '0.1s',
					textTransform: 'uppercase',
				},
				'.btn-home:hover': {
					color: 'var(--hover-blue-btn)',
					borderBottom: '3px solid var(--hover-blue-btn)',
				},
			});
		}),
	],
};

// https://res.cloudinary.com/dpxucxgwg/image/upload/v1678917982/bg-carrousel_fk0my1.png
