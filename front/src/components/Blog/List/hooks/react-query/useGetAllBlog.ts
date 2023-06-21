import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IBlogList } from 'core/types/blogType';

export const useGetAllBlog = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	return useQueryHook([endPointUrls.AllBlogs], () => api.get(endPointUrls.AllBlogs), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IBlogList, Error>;
};
