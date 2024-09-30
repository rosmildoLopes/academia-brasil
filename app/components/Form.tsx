'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Form: React.FC = () => {
	const [course, setCourse] = useState('');
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [mensaje, setMensaje] = useState('');

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();

		const data = {
			'Curso de Interes': course,
			'Nombre Completo': name,
			Mail: mail,
			Mensaje: mensaje,
		};

		try {
			const response = await axios.post(
				'https://sheet.best/api/sheets/d2dfcfc2-33df-49d9-b653-a26985e03307',
				data
			);
			console.log(response);
	
			// Redirigir a la página de confirmación antes de limpiar los campos
			const router = useRouter();
			router.push('/mensajeEnviada');
	
			// Limpiar los campos del formulario después de enviarlo
			setCourse('');
			setName('');
			setMail('');
			setMensaje('');
		} catch (error) {
			console.error('Error submitting form:', error);
		}
	};

	return (
		<div className='flex flex-col gap-6 w-11/12 lg:w-1/2 mx-auto'>
			<form
				className='flex flex-col gap-6 text-firstBlue font-semibold'
				id='myForm'
				onSubmit={handleSubmit}
			>
				<div className='border-violet-container rounded-3xl'>
					<select
						value={course}
						onChange={e => setCourse(e.target.value)}
						className='w-full border-violet text-firstBlue font-black rounded-2xl outline-none appearance-none'
					>
						<option
							value=''
							className='bg-firstBackground text-firstBlue font-semibold text-md flex'
						>
							Seleccioná la diplomatura o curso de tu
							interés
						</option>
						<option
							value='Marketing-Digital'
							className='bg-firstBackground font-semibold text-md'
						>
							Marketing
						</option>
						<option
							value='Marketing Politico'
							className='bg-firstBackground font-semibold text-md'
						>
							Marketing Político
						</option>
						<option
							value='Ciberseguridad'
							className='bg-firstBackground font-semibold text-md'
						>
							Ciberseguridad
						</option>
						<option
							value='Fullstack'
							className='bg-firstBackground font-semibold text-md'
						>
							Fullstack
						</option>
						<option
							value='Project Management'
							className='bg-firstBackground font-semibold text-md'
						>
							Project Management
						</option>
					</select>
				</div>
				<div className='w-full flex flex-col gap-6'>
					<div className='border-violet-container rounded-3xl'>
						<input
							type='text'
							value={name}
							onChange={e => setName(e.target.value)}
							className='border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none'
							placeholder='Nombre completo *'
						/>
					</div>
					<div className='border-violet-container rounded-3xl'>
						<input
							type='email'
							value={mail}
							onChange={e => setMail(e.target.value)}
							className='border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none'
							placeholder='Email *'
						/>
					</div>
					<div className='border-violet-container rounded-3xl'>
						<textarea
							value={mensaje}
							onChange={e => setMensaje(e.target.value)}
							className='pl-3 pt-2 resize-none bg-transparent w-full border-violet rounded-3xl placeholder:text-firstBlue placeholder:font-extrabold outline-none h-32'
							placeholder='Escribí tu mensaje...'
						></textarea>
					</div>
				</div>
				<div className='w-full flex justify-center lg:justify-end'>
					<input
						type='submit'
						value='Enviar mensaje'
						className='flex justify-center items-center bg-firstBlue hover:scale-110 transition duration-500 font-black text-black rounded-full px-16 lg:px-16 py-3 w-auto lg:w-1/2'
					/>
				</div>
			</form>
		</div>
	);
};

export default Form;
