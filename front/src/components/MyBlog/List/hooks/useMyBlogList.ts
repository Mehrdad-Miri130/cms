import { useGetMyBlog } from 'components/MyBlog/List/hooks/react-query/useGetMyBlog';

const useMyBlogList = () => {
	const { data: blogList } = useGetMyBlog();
	return { blogList };
};

export default useMyBlogList;
