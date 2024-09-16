import React from 'react';

function Footer() {
	return (
		<footer className='bg-gray-800 text-white py-4'>
			<div className='container mx-auto text-center'>
				<p>&copy; 2024 Nimus Consultora. Todos los derechos reservados.</p>
				<div className='mt-4'>
					<a href='#privacy' className='text-sm text-gray-400 hover:text-white'>
						Política de Privacidad
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
