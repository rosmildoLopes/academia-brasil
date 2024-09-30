import React from 'react';
import Image from 'next/image';
import {
	bagel,
	ultra,
	titan,
	luckiest,
	shrikhand,
} from '@/app/font/font';

export default function HeroBlog() {
	return (
		<div className='w-full pt-12'>
			<div className='relative text-violet-gradient text-5xl md:text-9xl flex justify-center py-5 items-center'>
				<Image
					src='/blogIconosIzquierda.svg'
					alt='Icon'
					width={150.36}
					height={163.7}
					className='absolute w-28 left-0 md:w-64  md:left-56 md:top-8'
				/>
				<Image
					src='/blogIconosDerecha.svg'
					alt='Icon	'
					width={150.36}
					height={163.7}
					className='absolute  w-28 right-0 md:w-64 md:right-56 md:top-6'
				/>
				<div>
					<span className={`${ultra.className}`}>B</span>
					<span className={`${shrikhand.className}`}>
						l
					</span>
					<span className={`${bagel.className}`}>o</span>
					<span className={`${luckiest.className}`}>g</span>
				</div>
			</div>
		</div>
	);
}
