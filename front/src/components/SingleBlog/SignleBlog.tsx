import React from 'react';
import { useSingleBlogQuery } from 'components/SingleBlog/hooks/react-query/useSingleBlogQuery';

const SingeBlog = () => {
	const { data, isFetching } = useSingleBlogQuery();

	if (isFetching) return <h2>Loading...</h2>;
	if (!data) return <h2>Not Found</h2>;

	return (
		<div className='space-y-8'>
			<div className='space-y-3'>
				<div className='flex justify-between items-center pb-3'>
					<span>{data?.data.publishedAt}</span>
					<span>{data?.data.authorEmail}</span>
				</div>

				<hr />
			</div>

			<h2 className='text-center'>{data?.data.title}</h2>

			<div className='h-[400px] w-full'>
				<img src={data?.data.image} className='w-full h-full object-cover rounded-lg' />
			</div>

			<p>{data?.data?.content}</p>
		</div>
	);
};

export default SingeBlog;
