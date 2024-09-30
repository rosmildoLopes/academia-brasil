'use client';
import React, { useState } from 'react';
import NavLinks from './NavLinks';
import Image from 'next/image';
import { RiCloseFill } from 'react-icons/ri';
import { IoMenu } from 'react-icons/io5';
import Link from 'next/link';

const Navbar2: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setOpen(!open);
  };

  const handleLinkClick = (): void => {
    setOpen(false); // Cierra el menú al hacer clic en un enlace
  };

  return (
    <nav className="fixed bg-firstBackground z-[999] w-screen">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between bg-firstBackground">
          <Link href={'/'} onClick={() => setOpen(false)}>
            <Image
              src='/logo.svg'
              alt='Academia Numen Logo'
              width={217}
              height={49.73}
              priority
              layout='intrinsic'
              className='pt-3 md:w-56 w-32'
            />
          </Link>
          <div
            className="text-4xl md:hidden"
            onClick={handleMenuToggle}
          >
            {open ? (
              <p className="text-firstBlue text-5xl">
                <RiCloseFill />
              </p>
            ) : (
              <p className="text-firstBlue text-5xl">
                <IoMenu />
              </p>
            )}
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-6 text-white font-bold tracking-wide">
          <NavLinks closeMenu={handleLinkClick} />
          <li>
            <Link
              href='/empresas'
              className='py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'EMPRESAS'
            >
              EMPRESAS
            </Link>
          </li>
          <li>
            <Link
              href='/contacto'
              className='py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'CONTACTO'
            >
              CONTACTO
            </Link>
          </li>
          <li>
            <Link
              href='https://campus.academianumen.com/login/index.php'
              target='_blank'
              className='py-3 px-5 rounded-full border-2 border-firstBlue hover:bg-firstBlue hover:text-black inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'CAMPUS'
            >
              CAMPUS
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-firstBackground text-white fixed overflow-x-hidden w-10/12 mx-auto top-0 overflow-y-auto bottom-0 py-24
            duration-500 ${open ? 'left-0' : 'left-[-100%]'}
          `}
        >
          <NavLinks closeMenu={handleLinkClick} />
          <li>
            <Link
              href='/empresas'
              className='py-7 px-5 inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'EMPRESAS'
            >
              EMPRESAS
            </Link>
          </li>
          <li>
            <Link
              href='/contacto'
              className='py-7 px-5 inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'CONTACTO'
            >
              CONTACTO
            </Link>
          </li>
          <li>
            <Link
              href='https://campus.academianumen.com/login/index.php'
              target='_blank'
              className='py-7 px-5 inline-block'
              onClick={handleLinkClick} // Cierra el menú al hacer clic en 'CAMPUS'
            >
              CAMPUS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
