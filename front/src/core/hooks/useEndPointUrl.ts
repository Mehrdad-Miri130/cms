import { useParams } from 'react-router-dom';

const useEndPointUrl = () => {
	const { blogId } = useParams();

	const endPointUrls = Object.freeze({
		// auth
		LOGIN: '/api/sessions',
		CURRENT_USER: '/api/sessions/current',

		// blog
		ALL_BLOGS: '/api/pages',
		SINGLE_BLOG: `/api/pages/${blogId}`,
	});

	return { endPointUrls, blogId };
};

export default useEndPointUrl;
