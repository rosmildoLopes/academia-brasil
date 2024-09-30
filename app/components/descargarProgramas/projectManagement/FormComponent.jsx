'use client';
import React, { useEffect } from 'react';

const FormComponent = ({ onClose }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'/components/descargarProgramas/projectManagement/js/validation.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<div className='zf-templateWidth flex flex-col w-11/12 lg:w-1/2 mx-auto text-firstBlue font-semibold absolute bg-firstBackground shadow-lg shadow-slate-50 rounded-xl p-12 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 md-translate-y-1/2 z-[1000]'>
			<button
				onClick={onClose}
				className='absolute right-6 top-6 shadow hover:shadow-sm shadow-slate-50 font-bold text-firstBlue bg-gray-600 w-6 h-6 rounded-full p-2 flex justify-center items-center'
			>
				X
			</button>
			<form
				action='https://forms.zohopublic.com/academianumen/form/ProgramaProjectManagement/formperma/y7vNuqMh_svwAHBraQENpFKIzI6oVeEU1GPVCwKQGyw/htmlRecords/submit'
				name='form'
				method='POST'
				onSubmit='javascript:document.charset="UTF-8"; return zf_ValidateAndSubmit();'
				acceptCharset='UTF-8'
				encType='multipart/form-data'
				id='form'
			>
				<input
					type='hidden'
					name='zf_referrer_name'
					value=''
				/>
				<input
					type='hidden'
					name='zf_redirect_url'
					value=''
				/>
				<input type='hidden' name='zc_gad' value='' />
				<div className='zf-templateWrapper'>
					<ul className='zf-tempHeadBdr'>
						<li className='zf-tempHeadContBdr'>
							<h2 className='zf-frmTitle text-3xl mb-6 pl-4'>
								<em>Programa Project Management</em>
							</h2>
							<p className='zf-frmDesc'></p>
							<div className='zf-clearBoth'></div>
						</li>
					</ul>
					<div className='zf-subContWrap zf-topAlign'>
						<ul className='space-y-5'>
							<li className='zf-tempFrmWrapper zf-small'>
								<label className='zf-labelName pl-4'>
									¿Qué programa te interesa?
									<em className='zf-important'>*</em>
								</label>
								<div className='zf-tempContDiv  border-violet-container rounded-3xl mt-2'>
									<select
										className='zf-form-sBox border-violet rounded-3xl placeholder:font-extrabold outline-none'
										name='Dropdown'
										checktype='c1'
									>
										<option
											selected='true'
											value='-Select-'
											className='bg-secondBackground text-gray-300 text-lg'
										>
											Selecione el curso que desea recibir
											el programa
										</option>
										<option
											className='bg-thirdBackground text-gray-300 text-lg leading-loose'
											value='Project&#x20;Management'
										>
											Project Management
										</option>
										<option
											className='bg-thirdBackground text-gray-300 text-lg leading-loose'
											value='Project&#x20;Management&#x20;Asincr&oacute;nico'
										>
											Project Management Asincr&oacute;nico
										</option>
										<option
											className='bg-thirdBackground text-gray-300 text-lg leading-loose'
											value='Certificaciones&#x20;PMI'
										>
											Certificaciones PMI
										</option>
										<option
											className='bg-thirdBackground text-gray-300 text-lg leading-loose'
											value='Curso&#x20;preparaci&oacute;n&#x20;PMP&#x20;en&#x20;espa&ntilde;ol'
										>
											Curso preparaci&oacute;n PMP en
											espa&ntilde;ol
										</option>
										<option
											className='bg-thirdBackground text-gray-300 text-lg leading-loose'
											value='Agilidad&#x20;y&#x20;Scrum'
										>
											Agilidad y Scrum
										</option>
									</select>
									<p
										id='Dropdown_error'
										className='zf-errorMessage'
										style={{ display: 'none' }}
									>
										Invalid value
									</p>
								</div>
								<div className='zf-clearBoth'></div>
							</li>
							<li className='zf-tempFrmWrapper zf-name zf-namemedium '>
								<label className='zf-labelName pl-4'>
									Nombre y apellido
									<em className='zf-important'>*</em>
								</label>
								<div className='zf-tempContDiv zf-twoType flex flex-col md:flex-row justify-center items-center  w-full gap-4'>
									<div className='zf-nameWrapper w-full md:w-1/2'>
										<span className='flex border-violet-container rounded-3xl w-full'>
											<input
												type='text'
												maxlength='255'
												name='Name_First'
												fieldType={7}
												placeholder='Nombre'
												className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
											/>
										</span>
									</div>
									<div className='zf-nameWrapper  w-full md:w-1/2'>
										<span className='flex border-violet-container rounded-3xl w-full'>
											<input
												type='text'
												maxlength='255'
												name='Name_Last'
												fieldType={7}
												placeholder='Apellido'
												className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
											/>
										</span>
									</div>
								</div>
								<p
									id='Name_error'
									className='zf-errorMessage'
									style={{ display: 'none' }}
								>
									Invalid value
								</p>
							</li>
							<li className='zf-tempFrmWrapper zf-small'>
								<label className='zf-labelName pl-4'>
									Email
									<em className='zf-important'>*</em>
								</label>
								<div className='zf-tempContDiv'>
									<span className='flex border-violet-container rounded-3xl w-full'>
										<input
											fieldType={9}
											type='text'
											maxLength='255'
											name='Email'
											checktype='c5'
											placeholder='Email'
											className='border-violet-container rounded-3xl outline-none'
										/>
									</span>
									<p
										id='Email_error'
										className='zf-errorMessage'
										style={{ display: 'none' }}
									>
										Invalid value
									</p>
								</div>
								<div className='zf-clearBoth'></div>
							</li>
							<li className='zf-tempFrmWrapper zf-small'>
								<label className='zf-labelName pl-4'>
									Teléfono
									<em className='zf-important'>*</em>
								</label>
								<div className='zf-tempContDiv zf-phonefld '>
									<div className='zf-phwrapper flex flex-col md:flex-row justify-center items-center gap-4'>
										<span className='flex border-violet-container rounded-3xl w-full md:w-1/2'>
											<input
												type='text'
												compname='PhoneNumber_countrycodeval'
												name='PhoneNumber_countrycodeval'
												checktype='c7'
												maxLength='10'
												phoneFormat='1'
												isCountryCodeEnabled
												id='international_PhoneNumber_countrycodeval'
												valType='code'
												placeholder='+54'
												className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
											/>
										</span>
										<span className='flex border-violet-container rounded-3xl w-full md:w-1/2'>
											<input
												type='text'
												compname='PhoneNumber'
												name='PhoneNumber_countrycode'
												maxLength='20'
												checktype='c7'
												phoneFormat='1'
												isCountryCodeEnabled
												fieldType='11'
												id='international_PhoneNumber_countrycode'
												valType='number'
												phoneFormatType='1'
												placeholder='Numero'
												className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
											/>
										</span>
									</div>
									<p
										id='PhoneNumber_error'
										className='zf-errorMessage'
										style={{ display: 'none' }}
									>
										Invalid value
									</p>
								</div>
								<div className='zf-clearBoth'></div>
							</li>
						</ul>
					</div>
					<ul className=''>
						<li className='zf-fmFooter flex justify-center items-center md:justify-end w-full md:w'>
							<button className='zf-submitColor  hover:scale-110 transition duration-500 mt-5 px-10 py-3 justify-center bg-firstBlue text-black rounded-full hover:text-white'>
								Enviar
							</button>
						</li>
					</ul>
					<div className='flex justify-center'>
						<button
							onClick={onClose}
							className='flex justify-center items-center hover: transition duration-500 mt-3 px-12 py-3 rounded-full'
						>
							Cerrar
						</button>
					</div>
				</div>
			</form>
			<script type='text/javascript'>
				var zf_DateRegex = new
				RegExp("^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]
				{2})$"); var zf_MandArray = ["Dropdown",
				"Name_Last", "Email", "PhoneNumber_countrycode",
				"PhoneNumber_countrycodeVal"]; var zf_FieldArray =
				["Dropdown", "Name_First", "Name_Last", "Email",
				"PhoneNumber_countrycode",
				"PhoneNumber_countrycodeVal"]; var
				isSalesIQIntegrationEnabled = false; var
				salesIQFieldsArray = [];
			</script>
		</div>
	);
};

export default FormComponent;
