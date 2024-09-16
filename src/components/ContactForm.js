import FormInput from './FormInput';
import React from 'react';

function ContactForm() {
	return (
		<section id='contact' className='contact py-16 bg-white text-gray-800'>
			<div className='container mx-auto'>
				<h2 className='text-3xl font-bold mb-6 text-center'>Contáctanos</h2>
				<form className='max-w-lg mx-auto'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
						<FormInput type='text' name='apellido' placeholder='Apellido' />
						<FormInput type='text' name='nombre' placeholder='Nombre' />
					</div>
					<FormInput type='tel' name='telefono' placeholder='Teléfono' />
					<FormInput
						type='email'
						name='email'
						placeholder='Correo Electrónico'
					/>
					<FormInput type='text' name='pais' placeholder='País' />
					<FormInput type='text' name='provincia' placeholder='Provincia' />
					<FormInput type='text' name='localidad' placeholder='Localidad' />
					<div className='mb-4'>
						<textarea
							name='consulta'
							placeholder='Consulta'
							className='border p-2 rounded w-full h-32'
							required
						></textarea>
					</div>
					<div className='text-center'>
						<button
							type='submit'
							className='bg-blue-600 text-white px-6 py-2 rounded'
						>
							Enviar Consulta
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default ContactForm;
