'use client';
import { useEffect } from 'react';
import Head from 'next/head';

export default function DataYSeguridadForm() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src =
			'/components/cursos/marketing/js/validation.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Pre inscripción Data y Seguridad</title>
			</Head>
			<div className='zf-backgroundBg flex flex-col gap-6 w-11/12 lg:w-1/2 mx-auto'>
				<div className='zf-templateWidth text-firstBlue font-semibold'>
					<form
						action='https://forms.zohopublic.com/academianumen/form/PreinscripcinDatayseguridad/formperma/oC8EL31tjqLTIWwn6BG02XWrHsgExB6DEnrT5MO1w6k/htmlRecords/submit'
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
									<h2 className='zf-frmTitle text-3xl mb-6 pl-3'>
										<em>
											Pre inscripción Data y Seguridad
										</em>
									</h2>
									<p className='zf-frmDesc'></p>
									<div className='zf-clearBoth'></div>
								</li>
							</ul>
							<div className='zf-subContWrap zf-topAlign'>
								<ul className='space-y-5'>
									<li className='zf-tempFrmWrapper zf-small'>
										<label className='zf-labelName pl-3'>
											Curso al que te quieres pre inscribir
										</label>
										<div className='zf-tempContDiv border-violet-container rounded-3xl mt-2'>
											<select
												class='zf-form-sBox'
												name='Dropdown'
												checktype='c1'
											>
												<option
													selected='true'
													value='-Select-'
												>
													-Select-
												</option>
												<option value='Ciberseguridad'>
													Ciberseguridad
												</option>
												<option value='Data&#x20;Analytics'>
													Data Analytics
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
									<li className=' zf-tempFrmWrapper zf-name zf-namemedium w-full '>
										<label className='zf-labelName pl-3'>
											Nombre y Apellido
											<em className='zf-important'>*</em>
										</label>
										<div className='zf-tempContDiv zf-twoType w-full flex '>
											<div className='zf-nameWrapper flex flex-col md:flex-row gap-6 md:gap-2 w-full'>
												<span className='border-violet-container rounded-3xl w-full md:w-1/2'>
													<input
														type='text'
														maxLength='255'
														name='Name_First'
														fieldType={7}
														placeholder='Nombre'
														className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
													/>
												</span>
												<span className='border-violet-container rounded-3xl w-full md:w-1/2'>
													<input
														type='text'
														maxLength='255'
														name='Name_Last'
														fieldType={7}
														placeholder='Apellido'
														className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
													/>
												</span>
											</div>
											<p
												id='Name_error'
												className='zf-errorMessage'
												style={{ display: 'none' }}
											>
												Invalid value
											</p>
										</div>
										<div className='zf-clearBoth'></div>
									</li>
									<li className='zf-tempFrmWrapper zf-date flex flex-col md:flex-row gap-6 md:gap-2 w-full'>
										<div className='w-full'>
											<label className='zf-labelName pl-3'>
												Fecha de nacimiento
											</label>
											<div className='zf-tempContDiv border-violet-container rounded-3xl mt-2'>
												<span>
													<input
														type='text'
														name='Date'
														checktype='c4'
														maxLength='25'
														placeholder='dd-MMM-yyyy'
														autoComplete='off'
														className='outline-none border-violet '
													/>
												</span>
												<div className='zf-clearBoth'></div>
												<p
													id='Date_error'
													className='zf-errorMessage'
													style={{ display: 'none' }}
												>
													Invalid value
												</p>
											</div>
											<div className='zf-clearBoth'></div>
										</div>
										<div className='w-full'>
											<label className='zf-labelName pl-3'>
												DNI
											</label>
											<div className='zf-tempContDiv'>
												<span className='flex border-violet-container rounded-3xl mt-2'>
													<input
														type='text'
														name='Number'
														checktype='c2'
														maxLength='18'
														placeholder='DNI'
														className='border-violet-container rounded-3xl outline-none border-violet '
													/>
												</span>
												<p
													id='Number_error'
													className='zf-errorMessage'
													style={{ display: 'none' }}
												>
													Invalid value
												</p>
											</div>
										</div>
									</li>
									<li className='zf-tempFrmWrapper zf-small'>
										<label className='zf-labelName pl-3'>
											Email
											<em className='zf-important'>*</em>
										</label>
										<div className='zf-tempContDiv'>
											<span className='flex border-violet-container rounded-3xl'>
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
									<li className='zf-tempFrmWrapper zf-small '>
										<label className='zf-labelName pl-3'>
											Teléfono
											<em className='zf-important'>*</em>
										</label>
										<div className='zf-tempContDiv zf-phonefld '>
											<div className='zf-phwrapper flex flex-col md:flex-row gap-6 md:gap-2 w-full'>
												<span className='flex border-violet-container rounded-3xl w-full'>
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
												<span className='flex border-violet-container rounded-3xl w-full'>
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
									<li className='zf-tempFrmWrapper zf-address zf-addrlarge'>
										<label className='zf-labelName pl-3'>
											País y ciudad
										</label>
										<div className='zf-tempContDiv zf-address'>
											<div className='zf-addrCont flex flex-col md:flex-row gap-6 md:gap-2 w-full '>
												<span className='zf-flLeft zf-addtwo flex border-violet-container rounded-3xl w-full'>
													<select
														className='zf-form-sBox border-violet rounded-3xl placeholder:font-extrabold outline-none'
														name='Address_Country'
														checktype='c1'
													>
														<option value='-Select-'>
															-Seleciona un pais-
														</option>
														<option value='Argentina'>
															Argentina
														</option>
														<option value='Chile'>
															Chile
														</option>
														<option value='Brasil'>
															Brasil
														</option>
														<option value='Colombia'>
															Colombia
														</option>
														<option value='Ecuador'>
															Ecuador
														</option>
													</select>
												</span>
												<span className='zf-flLeft zf-addtwo flex border-violet-container rounded-3xl w-full'>
													<input
														type='text'
														maxLength='255'
														name='Address_Region'
														checktype='c1'
														placeholder='Provincia'
														className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
													/>
												</span>
												<span className='zf-flLeft zf-addtwo flex border-violet-container rounded-3xl w-full'>
													<input
														type='text'
														maxLength='255'
														name='Address_City'
														checktype='c1'
														placeholder='Ciudad'
														className='border-violet rounded-3xl placeholder:font-extrabold outline-none'
													/>
												</span>
												<p
													id='Address_error'
													className='zf-errorMessage'
													style={{ display: 'none' }}
												>
													Invalid value
												</p>
											</div>
										</div>
										<div className='zf-eclearBoth'></div>
									</li>
									<li className='zf-tempFrmWrapper zf-small'>
										<label className='zf-labelName pl-3'>
											Medio de pago preferido
										</label>
										<div className='zf-tempContDiv border-violet-container rounded-3xl'>
											<select
												className='zf-form-sBox border-violet rounded-3xl placeholder:font-extrabold outline-none'
												name='Dropdown1'
												checktype='c1'
											>
												<option value='-Select-' selected>
													-Select-
												</option>
												<option value='Mercado Pago'>
													Mercado Pago
												</option>
												<option value='Transferencia Bancaria'>
													Transferencia Bancaria
												</option>
												<option value='Stripe Paypal'>
													Stripe&#x2f;Paypal
												</option>
												<option value='Cuando me contacten lo decido'>
													Cuando me contacten lo decido
												</option>
											</select>
											<p
												id='Dropdown1_error'
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
							<ul>
								<li className='zf-fmFooter flex justify-center md:justify-end'>
									<button
										className='zf-submitColor hover:scale-110 transition duration-500 mt-5 px-10 py-3 justify-center bg-firstBlue text-black rounded-full hover:text-white'
										type='submit'
									>
										Enviar
									</button>
								</li>
							</ul>
						</div>
					</form>
				</div>
			</div>
			<script
				type='text/javascript'
				dangerouslySetInnerHTML={{
					__html: `
						var zf_DateRegex = new RegExp("^(([0][1-9]|[1-2][0-9]|3[0-1])/|-/|-[0-9]{2})$");
						var zf_MandArray = ["Name_Last", "Email", "PhoneNumber_countrycode", "PhoneNumber_countrycodeVal"];
						var zf_FieldArray = ["Dropdown", "Name_First", "Name_Last", "Date", "Number", "Email", "PhoneNumber_countrycode", "PhoneNumber_countrycodeVal", "Address_City", "Address_Region", "Address_Country", "Dropdown1"];
						var isSalesIQIntegrationEnabled = false;
						var salesIQFieldsArray = [];
					`,
				}}
			/>
		</>
	);
}
