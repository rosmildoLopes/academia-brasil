import React from 'react';
import Image from 'next/image';
import {
	bagel,
	ultra,
	titan,
	luckiest,
	shrikhand,
} from '@/app/font/font';

export default function HeroNosotros() {
	return (
		<div className='w-full md:w-1/2'>
			<div className='flex flex-col justify-center'>
				<h2
					className={`${titan.className}  text-green-gradient text-5xl md:text-6xl lg:text-8xl text-center`}
				>
					ACADEMIA
				</h2>
			</div>
			<div className='w-full mx-auto text-violet-gradient text-6xl md:text-7xl lg:text-9xl flex justify-center py-6 md:pt-4 -mt-8 items-center tracking-wider'>
				<div>
					<span className={`${ultra.className}`}>N</span>
					<span className={`${bagel.className}`}>u</span>
					<span className={`${shrikhand.className}`}>m</span>
					<span className={`${luckiest.className}`}>e</span>
					<span className={`${shrikhand.className}`}>n</span>
				</div>
			</div>
		</div>
	);
}
