'use client';
import Link from 'next/link';
import React from 'react';

interface HablarInscripcionProps {
	phoneNumber: string;
	message: string;
	className?: string;
}

const HablarInscripcion: React.FC<
	HablarInscripcionProps
> = ({ phoneNumber, message, className = '' }) => {
	const encodedMessage = encodeURIComponent(message);

	const whatsappUrl =
		typeof window !== 'undefined' &&
		window.innerWidth >= 768
			? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
			: `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

	return (
		<Link
			href={whatsappUrl}
			target='_blank'
			className={`px-3 py-2 border-2 border-firstBlue text-center rounded-3xl hover:bg-firstBlue hover:text-black md:text-lg md:px-16 md:py-3 md:text-black md:bg-firstBlue md:rounded-full md:hover:bg-transparent md:hover:text-firstBlue ${className}`}
		>
			Inscribirme
		</Link>
	);
};

export default HablarInscripcion;
