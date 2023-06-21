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

export interface IBlogList extends IGlobalType {
	data: IBlog[];
}
