import React, { FC } from 'react';

interface IBlogItem {
	image: string;
	title: string;
	publishedAt: string;
	authorEmail: string;
}

const BlogItem: FC<IBlogItem> = ({ image, title, authorEmail, publishedAt }) => {
	return (
		<div className='flex flex-col space-y-4 shadow-lg rounded-lg'>
			<img src={image} className='rounded-lg' />

			<div className='px-4'>
				<h3 className='text-center'>{title}</h3>

				<hr />

				{authorEmail && (
					<p className='flex justify-between'>
						<span className='font-bold'>author:</span> <span>{authorEmail}</span>
					</p>
				)}

				<p className='flex justify-between'>
					<span className='font-bold'>publish date:</span> <span>{publishedAt === null ? 'Not Publish' : publishedAt}</span>
				</p>
			</div>
		</div>
	);
};

export default BlogItem;
