import React from 'react';
import terminosYCondiciones from '../constants/terminosYCondiciones.json';

const TerminosYCondiciones = () => {
  return (
    <div className='text-white md:px-20 px-6 py-14 text-left mx-auto leading-loose w-11/12 md:w-7/12 border-2 border-firstBlue rounded-3xl font-medium'>
      <h2 className='text-center font-bold text-3xl mb-6 text-firstBlue'>{terminosYCondiciones.title}</h2>

      {/* párrafos de introducción */}
      {terminosYCondiciones.intro.map((intro, introIndex) => (
        <div key={introIndex} className='mb-4'>
          {intro.paragraphs.map((paragraph, itemIndex) => (
            <p key={itemIndex} className='mb-2'>{paragraph}</p>
          ))}
        </div>
      ))}

      {/* Terminos y condiciones con sus items */}
      {terminosYCondiciones.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mt-6'>
          <h3 className='font-semibold mb-4 uppercase text-xl text-firstBlue'>{section.title}</h3>
          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className='mb-4'>
              {item.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className='mb-2'>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TerminosYCondiciones;
