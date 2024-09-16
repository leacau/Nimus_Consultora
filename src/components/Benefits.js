import React from 'react';
import benefitsImage from '../assets/images/benefits.jpg'; // Importa la imagen

function Benefits() {
	return (
		<section className='benefits py-16 bg-white text-gray-800'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>
					Beneficios de Nuestro Servicio
				</h2>
				<p className='text-lg mb-6'>
					Obtén mejoras tangibles en tus procesos de ventas, incrementa la
					eficiencia de tu equipo y maximiza los resultados comerciales.
				</p>
				<div className='mt-8'>
					<img
						src={benefitsImage}
						alt='Beneficios de la consultoría'
						className='mx-auto rounded-lg shadow-lg'
					/>
				</div>
			</div>
		</section>
	);
}

export default Benefits;
