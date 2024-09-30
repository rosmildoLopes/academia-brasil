// pages/preinscripcion.js
const ProgramaDataySeguridad = ({ onClose }) => {
	return (
		<div className='absolute w-11/12 lg:w-[70%] shadow-lg shadow-slate-50 rounded-xl h-auto overflow-hidden top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md-translate-y-1/2 z-[1300]'>
			<button
				onClick={onClose}
				className='absolute right-6 top-6 shadow hover:shadow-sm shadow-red-500 font-bold text-red-500 bg-gray-600 w-6 h-6 rounded-full p-2 flex justify-center items-center'
			>
				X
			</button>
			<iframe
				aria-label='Programa Data y seguridad'
				style={{
					height: '40rem',
					width: '100%',
					border: 'none',
				}}
				src='https://forms.zohopublic.com/academianumen/form/ProgramaDatayseguridad1/formperma/HMuStiL51Da_CPLhpoCKYLa3A6gDbu3XAY0fbFtu_8Q'
			></iframe>
		</div>
	);
};

export default ProgramaDataySeguridad;
