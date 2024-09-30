'use client';
import React, { useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { links } from './MyLinks';
import Link from 'next/link';

interface SubLink {
	name: string;
	link: string;
}
interface SubMenu {
	Head: string;
	sublink: SubLink[];
}
interface NavLink {
	name: string;
	submenu: boolean;
	sublinks?: SubMenu[];
}
interface NavLinksProps {
	closeMenu: () => void;
}
const NavLinks: React.FC<NavLinksProps> = ({
	closeMenu,
}) => {
	const [heading, setHeading] = useState<string>('');
	const [subHeading, setSubHeading] = useState<string>('');
	const [isMenuOpen, setIsMenuOpen] =
		useState<boolean>(false);

	const handleLinkClick = (): void => {
		setHeading('');
		setSubHeading('');
		setIsMenuOpen(false);
		closeMenu();
	};

	const handleMouseEnter = (linkName: string): void => {
		setHeading(linkName);
		setIsMenuOpen(true);
	};

	const handleMouseLeave = (): void => {
		setHeading('');
		setIsMenuOpen(false);
	};

	return (
		<>
			{links.map((link: NavLink) => (
				<div
					key={link.name}
					onMouseEnter={() => handleMouseEnter(link.name)}
					onMouseLeave={handleMouseLeave}
				>
					<div className='mt-5 md:mt-0 text-center md:cursor-pointer group py-3 px-5 rounded-full hover:bg-firstBlue hover:text-black'>
						<h1
							className='flex justify-between items-center group'
							onClick={() =>
								setHeading(
									heading !== link.name ? link.name : '',
								)
							}
						>
							{link.name}
							<span className='text-xl md:hidden inline'>
								{heading === link.name ? (
									<FiChevronUp />
								) : (
									<FiChevronDown />
								)}
							</span>
							<span className='text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2'>
								<FiChevronDown />
							</span>
						</h1>
						{link.submenu &&
							isMenuOpen &&
							heading === link.name && (
								<div className='absolute top-[76px] left-1/2 transform -translate-x-1/2 z-[1000] hidden group-hover:md:block hover:md:block'>
									<div className='py-2 bg-transparent'></div>
									<div className='bg-firstBackground shadow-xl border border-firstBlue/50 shadow-firstBlue rounded-md w-full py-12 mx-auto flex justify-between px-20 gap-28'>
										{link.sublinks?.map(
											(mysublinks: SubMenu) => (
												<div key={mysublinks.Head}>
													<h2 className='text-center text-lg font-bold text-firstBlue'>
														{mysublinks.Head}
													</h2>
													{mysublinks.sublink.map(
														(slink: SubLink) => (
															<li
																className='sublink-item text-sm text-gray-300 hover:text-firstGreen/85 hover:translate-x-2 transition duration-300 mt-7'
																key={slink.name}
															>
																<Link
																	href={slink.link}
																	onClick={handleLinkClick}
																>
																	{slink.name}
																</Link>
															</li>
														),
													)}
												</div>
											),
										)}
									</div>
								</div>
							)}
					</div>
					<div
						className={`${
							heading === link.name ? 'md:hidden' : 'hidden'
						}`}
					>
						{link.sublinks?.map((slinks: SubMenu) => (
							<div key={slinks.Head}>
								<div>
									<h2
										onClick={() =>
											subHeading !== slinks.Head
												? setSubHeading(slinks.Head)
												: setSubHeading('')
										}
										className='py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center'
									>
										{slinks.Head}

										<span className='text-xl md:mt-1 md:ml-2 inline'>
											{subHeading === slinks.Head ? (
												<FiChevronUp />
											) : (
												<FiChevronDown />
											)}
										</span>
									</h2>
									<div
										className={`${
											subHeading === slinks.Head
												? 'md:hidden'
												: 'hidden'
										}`}
									>
										{slinks.sublink.map(
											(slink: SubLink) => (
												<li
													className='sublink-item py-3 pl-14 text-gray-300'
													key={slink.name}
												>
													<Link
														href={slink.link}
														onClick={handleLinkClick}
													>
														{slink.name}
													</Link>
												</li>
											),
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

export default NavLinks;
