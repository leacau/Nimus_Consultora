import React from 'react';
import aboutImage from '../assets/images/about-image.jpg'; // Importa la imagen

function About() {
	return (
		<section className='about py-16 bg-white text-gray-800'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>Quiénes Somos</h2>
				<p className='text-lg'>
					En Nimus Consultora, nos especializamos en colaborar con empresas que
					buscan evaluar y mejorar sus procesos de ventas. Nuestro enfoque
					integral está diseñado para abordar todas las facetas del proceso
					comercial.
				</p>
				<div className='mt-8'>
					<img
						src={aboutImage}
						alt='Equipo de consultores trabajando'
						className='mx-auto rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</section>
	);
}

export default About;
