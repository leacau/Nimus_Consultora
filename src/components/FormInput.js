import React from 'react';

function FormInput({ type, name, placeholder, required = true }) {
	return (
		<div className='mb-4'>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className='border p-2 rounded w-full'
				required={required}
			/>
		</div>
	);
}

export default FormInput;
