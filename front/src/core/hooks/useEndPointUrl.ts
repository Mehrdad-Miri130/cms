import { useParams } from 'react-router-dom';

const useEndPointUrl = () => {
	const { blogId } = useParams();

	const endPointUrls = Object.freeze({
		// auth
		Login: '/api/sessions',
		CURRENT_USER: '/api/sessions/current',

		// blog
		AllBlogs: '/api/pages',
	});

	return { endPointUrls, blogId };
};

export default useEndPointUrl;
