import React from 'react';
import { agba, titan } from '../font/font';
import Image from 'next/image';
import Link from 'next/link';

const Consulta = () => {
	return (
		<div className='flex flex-col gap-7 w-11/12 lg:w-1/2 mx-auto text-white h-auto relative p-12'>
			<p>
				<span className='font-black text-sm lg:text-md'>
				Envie sua consulta
				</span>
				, e um assessor de admissões entrará em contato para esclarecer todas as suas dúvidas.
			</p>
			<div className='flex flex-col  '>
				<p>
				Ou nos envie uma mensagem no{' '}
					<span className='font-black'>Whatsapp em:</span> en:
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
