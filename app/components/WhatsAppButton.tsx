'use client';
import Image from 'next/image';
import React from 'react';

const WhatsAppButton: React.FC = () => {
	const handleClick = () => {
		const phoneNumber = '5491131262388';
		const message = encodeURIComponent(
			"Hola, me gustaría recibir más información sobre los cursos",
		);

		let whatsappUrl;

		// Condicional basado en el tamaño de la pantalla
		if (window.innerWidth >= 768) { 
			whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
		} else {
			whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
		}

		window.open(
			whatsappUrl,
			'_blank',
			'noopener,noreferrer',
		);
	};

	return (
		<button
			onClick={handleClick}
			className='flex items-center justify-center bg-green-600/70 text-white p-2 rounded-full hover:scale-125 hover:bg-green-600 transition duration-300 fixed z-50 right-6 md:right-10 md:bottom-10 bottom-8'
		>
			<Image
				src='/whatsappIcon.svg'
				width={200}
				height={200}
				alt='whatsapp'
        className='w-10 h-10 md:w-12 md:h-12'
			/>
		</button>
	);
};

export default WhatsAppButton;
