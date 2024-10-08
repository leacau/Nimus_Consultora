import './WhatsAppButton.css';

import React, { useEffect, useState } from 'react';

function WhatsAppButton() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 1000); // Aparece después de 1000ms
		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<a
			id='WAB'
			href='https://wa.me/5493425051513?text=Hola%2C%20estoy%20interesado%20en%20los%20servicios%20de%20consultor%C3%ADa%20de%20Nimus%20Consultora.'
			className='WAB fixed bottom-20 right-12 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 focus:bg-green-600 transition-all transform animate__animated animate__bounceIn animate__delay-1s hover:animate-none'
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Iniciar conversación por WhatsApp'
		>
			<img
				src='https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
				alt='WhatsApp'
				className='w-8 h-8 animate__animated animate__pulse animate__infinite'
			/>
		</a>
	);
}

export default WhatsAppButton;
