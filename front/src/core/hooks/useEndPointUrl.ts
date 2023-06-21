import { useParams } from 'react-router-dom';

const useEndPointUrl = () => {
	const { blogId } = useParams();

	const endPointUrls = Object.freeze({
		// auth
		LOGIN: '/api/sessions',
		CURRENT_USER: '/api/sessions/current',

		// blog
		ALL_BLOGS: '/api/pages',
		ALL_BLOGS_ADMIN: '/api/pages/by-admin',
		MY_BLOGS: '/api/pages/my-blog',
		SINGLE_BLOG: `/api/pages/${blogId}`,
	});

	return { endPointUrls, blogId };
};

export default useEndPointUrl;
