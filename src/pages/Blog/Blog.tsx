import { BlogGridMenu } from 'components/BlogPage/BlogGridMenu';
import { Subscribe } from 'components/BlogPage/Subscribe';

import styled from './Blog.module.scss';

const Blog = (): JSX.Element => {
	return (
		<div className={styled.container}>
			<BlogGridMenu />
			<Subscribe />
		</div>
	);
};

export { Blog };
