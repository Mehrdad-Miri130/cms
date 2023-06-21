import { UseQueryResult } from '@tanstack/react-query';
import useQueryHook from 'core/hooks/masterQuery/useQueryHook';
import api from 'core/services/fetch-api/useApi';
import useEndPointUrl from 'core/hooks/useEndPointUrl';
import { IBlogDetail } from 'core/types/blogType';

export const useSingleBlogQuery = () => {
	// hooks
	const { endPointUrls } = useEndPointUrl();

	return useQueryHook([endPointUrls.SINGLE_BLOG], () => api.get(endPointUrls.SINGLE_BLOG), {
		select: (res: any) => res.data,
	}) as UseQueryResult<IBlogDetail, Error>;
};
