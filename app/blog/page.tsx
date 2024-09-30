import React from 'react';
import HeroBlog from '../components/Heros/HeroBlog';
import BlogCards from '../components/BlogCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Blog',
	description: 'Artículos y noticias de Academia Numen',
};

const Blog = () => {
	return (
		<div className='p-3 py-12 '>
			<HeroBlog />
			<BlogCards />
		</div>
	);
};

export default Blog;
