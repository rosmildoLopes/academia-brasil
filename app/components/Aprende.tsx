import React from 'react';
import Image from 'next/image';
import { titan, agba } from '../font/font';
import { Clase } from '../constants/claseTesting'; 

interface AprendeProps {
	data: Clase[]; 
	className?: string;
}

const Aprende: React.FC<
	AprendeProps
> = ({ data, className }) => {
	return (
		<section className={`w-full`}>
			<div className='flex flex-col md:flex-row text-black w-full md:w-11/12 justify-center items-center gap-5 mx-auto'>
				{data.map((aprende, index) => (
					<div
						key={index}
						className={`flex flex-col w-full mx-auto h-[26rem] rounded-3xl rounded-b-none`}
					>
						<h2
							className={`text-3xl font-bold ${agba.className} ${className}  w-1/3 text-center md:text-left md:pl-6 rounded-3xl rounded-b-none p-2 pl-4`}
						>
							{aprende.tab}
						</h2>
						<div
							className={`${className} border-none rounded-3xl rounded-tl-none p-6 flex flex-col`}
						>
							<p className='font-medium leading-loose text-md py-6 italic'>
								{aprende.title}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Aprende;
