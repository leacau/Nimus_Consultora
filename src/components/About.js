import React from 'react';
import aboutImage from '../assets/images/about-image.jpg';
import { useInView } from 'react-intersection-observer';

function About() {
	const { ref, inView } = useInView({
		triggerOnce: true, // La animación se ejecutará solo una vez
		threshold: 0.2, // Se activará cuando el 20% del elemento esté visible
	});

	return (
		<section className='about py-16 bg-white text-gray-800'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>Quiénes Somos</h2>
				<p className='text-lg'>
					En Nimus Consultora, nos especializamos en colaborar con empresas que
					buscan evaluar y mejorar sus procesos de ventas.
				</p>
				<div
					className={`mt-8 ${
						inView ? 'animate__animated animate__fadeInUp' : ''
					}`}
					ref={ref}
				>
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
