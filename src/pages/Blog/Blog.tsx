import { BlogPage } from 'components/BlogPage';
import styled from './Blog.module.scss';

const Blog = () => {
  return (
    <main className={styled.container}>
      <BlogPage />
    </main>
  );
};

export { Blog };
