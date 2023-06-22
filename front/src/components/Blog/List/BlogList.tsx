import React from 'react';
import useBlogList from 'components/Blog/List/hooks/useBlogList';
import BlogItem from 'components/_Core/UI/BlogItem/BlogItem';
import { Link } from 'react-router-dom';
import useRoute from 'core/hooks/useRoute';

const BlogList = () => {
	const { blogList } = useBlogList();
	const { routes } = useRoute();

	return (
		<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
			{blogList?.data?.map((blog) => (
				<Link target='_blank' key={blog.pageId} to={routes.SINGLE_BLOG.link(blog.pageId)}>
					<BlogItem {...blog} />
				</Link>
			))}
		</div>
	);
};

export default BlogList;
