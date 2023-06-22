import React from 'react';
import BlogItem from 'components/_Core/UI/BlogItem/BlogItem';
import { Link } from 'react-router-dom';
import useRoute from 'core/hooks/useRoute';
import useMyBlogList from 'components/MyBlog/List/hooks/useMyBlogList';

const MyBlogList = () => {
	const { blogList } = useMyBlogList();
	const { routes } = useRoute();

	return (
		<div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
			{blogList?.data?.map((blog) => (
				<Link target='_blank' key={blog.id} to={routes.SINGLE_BLOG.link(blog.id)}>
					<BlogItem {...blog} />
				</Link>
			))}
		</div>
	);
};

export default MyBlogList;
