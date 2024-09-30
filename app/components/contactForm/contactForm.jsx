'use client';
import { useEffect } from 'react';
import Head from 'next/head';

export default function ContactForm() {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/components/ContactForm/js/validation.js';
		script.async = true;
		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, []);

	return (
		<>
			<Head>
				<title>Contacto</title>
			</Head>
			<div className='zf-backgroundBg flex flex-col gap-6 w-11/12 lg:w-1/2 mx-auto'>
				<div className='zf-templateWidth text-firstBlue font-semibold'>
					<form
						action='https://forms.zohopublic.com/academianumen/form/Contacto/formperma/eLDTztH7d9_qYfFd3U01FhkYVHY69HgNxehk9ME9QRc/htmlRecords/submit'
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
							<div className='zf-subContWrap zf-topAlign'>
								<ul className='space-y-5'>
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
									<li className='zf-tempFrmWrapper zf-small '>
										<label className='zf-labelName pl-3'>
											Codigo de país
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
