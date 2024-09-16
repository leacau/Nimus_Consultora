import React from 'react';
import processStep1 from '../assets/images/process-step1.jpg';
import processStep2 from '../assets/images/process-step2.jpg';
import processStep3 from '../assets/images/process-step3.jpg';
import processStep4 from '../assets/images/process-step4.jpg';
import processStep5 from '../assets/images/process-step5.jpg';

function Process() {
	return (
		<section className='process py-16 bg-gray-100 text-gray-800'>
			<div className='container mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>Nuestro Proceso de Trabajo</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<div className='process-step'>
						<img
							src={processStep1}
							alt='Reunión de Presentación'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Reunión de Presentación</h3>
						<p>Comprensión de las necesidades de la empresa.</p>
					</div>
					<div className='process-step'>
						<img
							src={processStep2}
							alt='Proceso de Diagnóstico'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Proceso de Diagnóstico</h3>
						<p>Análisis profundo del proceso de ventas actual.</p>
					</div>
					<div className='process-step'>
						<img
							src={processStep3}
							alt='Presentación de Propuesta'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Presentación de Propuesta</h3>
						<p>Informe detallado con áreas de mejora y plan de acción.</p>
					</div>
					<div className='process-step'>
						<img
							src={processStep4}
							alt='Implementación'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Implementación</h3>
						<p>Ejecución de las acciones acordadas.</p>
					</div>
					<div className='process-step'>
						<img
							src={processStep5}
							alt='Seguimiento'
							className='rounded-lg shadow-lg mb-4'
						/>
						<h3 className='text-xl font-semibold'>Seguimiento</h3>
						<p>Evaluación y ajustes de las acciones implementadas.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Process;
