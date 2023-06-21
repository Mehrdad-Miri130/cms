import { useGetAdminAllBlog } from 'components/AdminAllBlog/List/hooks/react-query/useGetAdminAllBlog';

const useAdminAllBlogList = () => {
	const { data: blogList } = useGetAdminAllBlog();
	return { blogList };
};

export default useAdminAllBlogList;
