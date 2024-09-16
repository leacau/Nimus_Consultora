import React from 'react';
import heroImage from '../assets/images/hero-image.jpg'; // Importa la imagen

function HeroSection() {
	return (
		<div
			className='hero bg-blue-600 h-screen text-white flex items-center justify-center relative'
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}} // Imagen de fondo
		>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='container relative z-10 text-center'>
				<h1 className='text-4xl md:text-6xl font-bold'>
					Optimización y Resultados Comerciales
				</h1>
				<p className='text-lg md:text-2xl mt-4'>
					En Nimus Consultora ayudamos a empresas a mejorar sus procesos de
					ventas con soluciones integrales.
				</p>
				<a
					href='#contact'
					className='mt-6 inline-block px-8 py-4 bg-green-500 text-white font-semibold rounded-lg'
				>
					Contáctanos
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
