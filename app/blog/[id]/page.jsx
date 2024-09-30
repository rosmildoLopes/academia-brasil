'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import blogData from '../../constants/blogData';
import HeroBlog from '@/app/components/Heros/HeroBlog';
import Link from 'next/link';
import Image from 'next/image';

const BlogPost = () => {
	const { id } = useParams();
	const blog = blogData.find(item => item.id === parseInt(id));

	if (!blog) {
		return <div className='text-center text-4xl'>Pronto tendremos muchas notas para vos!</div>;
	}

	const metadata = {
		title: blog.title,
		description: blog.content,
	};

	React.useEffect(() => {
		document.title = metadata.title;
		document.querySelector('meta[name="description"]').setAttribute('content', metadata.description);
	}, [metadata]);

	return (
		<div>
			<Link href='/blog' className='p-12 w-full'>
				<HeroBlog />
			</Link>
			<div className='p-4 max-w-4xl mx-auto text-white bg-black/10 rounded-2xl mb-24 mt-8'>
			

			{/* Blog Title */}
			<h2 className='text-3xl text-center font-bold mb-4'>{blog.title}</h2>

			{/* Blog Date */}
			<p className='text-sm text-gray-600 mb-4'>{blog.date}</p>

			{/* Blog Image */}
			<div className='mb-4'>
				<Image
					width={800} 
					height={600} 
					src={blog.image}
					alt={blog.title}
					className='w-full max-h-[300px] object-cover'
				/>
			</div>

			{/* Blog Content */}
			<section className='flex flex-col gap-12 px-4 font-medium mb-24 mt-16'>
        <p>{blog.paragraph1}</p>
        <p>{blog.paragraph2}</p>
        <p>{blog.paragraph3}</p>
        <p>{blog.paragraph4}</p>
      </section>
		</div>
		</div>
		
	);
};

export default BlogPost;
