import { IGlobalType } from 'core/types/globalType';

export interface IBlog {
	title: string;
	image: string;
	publishedAt: string;
	pageId: number;
	createdAt: string;
	authorId: number;
	authorEmail: string;
}

export interface ISingleBlog {
	id: number;
	content: string;
	author: number;
	orders: string;
	title: string;
	image: string;
	publishedAt: string;
	pageId: number;
	createdAt: string;
	authorId: number;
	authorEmail: string;
}

export interface IBlogList extends IGlobalType {
	data: IBlog[];
}

export interface IBlogDetail extends IGlobalType {
	data: ISingleBlog;
}
