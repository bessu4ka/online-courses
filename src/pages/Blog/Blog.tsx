import { BlogGridMenu } from 'components/BlogPage/BlogGridMenu';
import styled from './Blog.module.scss';

const Blog = () => {
  return (
    <main className={styled.container}>
      <BlogGridMenu />
    </main>
  );
};

export { Blog };
