import { titan } from '../font/font';
import React from 'react';

export interface LearningItem {
	id: number;
	message: string;
	boldStart: number;
}

interface LearningsProps {
	learningItems: LearningItem[];
}

const Learnings: React.FC<LearningsProps> = ({
	learningItems,
}) => {
	return (
		<section className='flex flex-col h-auto items-center justify-center text-white mx-auto my-4'>
			<div>
				<h2
					className={`${titan.className} text-3xl md:text-4xl md:-mb-6`}
				>
					¿QUÉ VAS A APRENDER?
				</h2>
			</div>
			<div className='flex flex-wrap justify-center w-full lg:w-11/12 mx-auto p-7 md:py-20'>
				{learningItems.map(item => (
					<div
						key={item.id}
						className='w-full md:w-1/2 p-3 '
					>
						<div className='flex flex-row items-center rounded justify-start lg:w-11/12 mx-auto gap-2 lg:pl-12'>
							<div className='bg-firstGreen w-1 h-1 md:w-2 p-1 md:h-2 rounded-full flex justify-center items-center align-middle' />
							<p className='text-white leading-relaxed text-lg md:text-xl '>
								{item.message.substring(0, item.boldStart)}
								<span className='font-bold '>
									{item.message.substring(item.boldStart)}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
			{/* Resto del contenido del componente */}
		</section>
	);
};

export default Learnings;
