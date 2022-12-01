import { BlogGridMenu } from 'components/BlogPage/BlogGridMenu';
import { Subscribe } from 'components/BlogPage/Subscribe';

import styled from './Blog.module.scss';

const Blog = () => {
  return (
    <main className={styled.container}>
      <BlogGridMenu />
      <Subscribe />
    </main>
  );
};

export { Blog };
