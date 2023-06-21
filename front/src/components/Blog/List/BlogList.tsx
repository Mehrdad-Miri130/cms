import React from 'react';
import useBlogList from 'components/Blog/List/hooks/useBlogList';

const BlogList = () => {
	const { blogList } = useBlogList();

	return (
		<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
			{blogList?.data?.map((blog) => (
				<div className='flex flex-col space-y-4 shadow-lg rounded-lg' key={blog.pageId}>
					<img src={blog.image} className='rounded-lg' />

					<div className='px-4'>
						<h3 className='text-center'>{blog.title}</h3>

						<hr/>

						<p className='flex justify-between'>
							<span className='font-bold'>author:</span> <span>{blog.authorEmail}</span>
						</p>

						<p className='flex justify-between'>
							<span className='font-bold'>publish date:</span> <span>{blog.publishedAt}</span>
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogList;
