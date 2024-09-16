import React from 'react';
import serviceClientAcquisition from '../assets/images/service-client-acquisition.jpg';
import serviceCoaching from '../assets/images/service-coaching.jpg';
import serviceOptimization from '../assets/images/service-optimization.jpg';
import serviceSoftware from '../assets/images/service-software.jpg';
import serviceTraining from '../assets/images/service-training.jpg';
import { useInView } from 'react-intersection-observer';

function Services() {
	const { ref: serviceRef, inView: serviceInView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});
	return (
		<section className='services py-16 bg-gray-100 text-gray-800'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>Nuestros Servicios</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8' ref={serviceRef}>
					<div
						className={`service ${
							serviceInView ? 'animate__animated animate__fadeInLeft' : ''
						}`}
					>
						<img
							src={serviceOptimization}
							alt='Optimización de procesos'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Optimización de Procesos</h3>
						<p>
							Identificación y corrección de ineficiencias en el proceso de
							ventas.
						</p>
					</div>
					<div
						className={`service ${
							serviceInView ? 'animate__animated animate__fadeInRight' : ''
						}`}
					>
						<img
							src={serviceTraining}
							alt='Capacitación de Asesores'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Capacitación de Asesores</h3>
						<p>
							Mejora en la capacitación y desempeño de los asesores de ventas.
						</p>
					</div>
					<div
						className={`service ${
							serviceInView ? 'animate__animated animate__fadeInLeft' : ''
						}`}
					>
						<img
							src={serviceClientAcquisition}
							alt='Estrategias de Captación'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Estrategias de Captación</h3>
						<p>Mejoras en las estrategias para atraer y retener clientes.</p>
					</div>
					<div
						className={`service ${
							serviceInView ? 'animate__animated animate__fadeInRight' : ''
						}`}
					>
						<img
							src={serviceSoftware}
							alt='Implementación de Software'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>
							Implementación de Software
						</h3>
						<p>
							Integración de herramientas tecnológicas para gestionar el proceso
							de ventas.
						</p>
					</div>
					<div
						className={`service ${
							serviceInView ? 'animate__animated animate__fadeInLeft' : ''
						}`}
					>
						<img
							src={serviceCoaching}
							alt='Coaching Individual'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Coaching Individual</h3>
						<p>
							Sesiones personalizadas para mejorar el desempeño del equipo de
							ventas.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
