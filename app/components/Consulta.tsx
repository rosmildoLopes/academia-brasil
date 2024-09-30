import React from 'react';
import { agba, titan } from '../font/font';
import Image from 'next/image';
import Link from 'next/link';

const Consulta = () => {
	return (
		<div className='flex flex-col gap-7 w-11/12 lg:w-1/2 mx-auto text-white h-auto'>
			<p>
				<span className='font-black text-sm lg:text-md'>
					Envianos tu consulta
				</span>
				, y un asesor de admisiones se pondrá en contacto
				para aclarar todas tus dudas.
			</p>
			<div className='flex flex-col'>
				<p>
					También podés visitar{' '}
					<span className='font-black'>
						nuestras oficinas
					</span>{' '}
					en:
				</p>
				<Link
					href={
						'https://www.google.com/maps/place/Av.+Ing.+Huergo+949+Piso+12,+C1107AOJ+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/data=!4m2!3m1!1s0x95a334d3fa6899ff:0x3a75372a98e023e5?sa=X&ved=1t:242&ictx=111'
					}
					className={`${agba.className} text-firstBlue hover:text-firstGreen`}
				>
					Av. Ing. Huergo 949 Piso 12 - Buenos Aires
				</Link>
			</div>
			<div className='flex flex-col relative'>
				<p>
					O envianos un{' '}
					<span className='font-black'>Whatsapp:</span> en:
				</p>
				<Link
					className={`${agba.className} text-firstBlue hover:text-firstGreen`}
					href={'https://wa.me/5491131262388'}
				>
					5491131262388
				</Link>
				<Image
					src='/consultaIcon.svg'
					alt='icono de consulta'
					width={100}
					height={100}
					className='w-24 lg:w-44 absolute -right-8 sm:right-0 bottom-0'
				/>
			</div>
		</div>
	);
};

export default Consulta;
