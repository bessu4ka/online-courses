import { Post } from './Post';
import { post_1, post_2, post_3 } from 'images/homePage';

import styled from './Blog.module.scss';
import { LargeButton } from 'components/Buttons/LargeButton';

const data = [
  {
    url: post_1,
    format: 'Podcast',
    format_icon: 'micro',
    direction: 'Marketing',
    date: 'September 4, 2023',
    time: '36',
    title: 'What is traffic arbitrage and does it really make money?',
    text: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
    method: 'Listen',
  },
  {
    url: post_2,
    format: 'Video',
    format_icon: 'play-blog',
    direction: 'Management',
    date: 'August 25, 2023',
    time: '45',
    title: 'What to do and who to talk to if you want to get feedback on the product',
    text: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
    method: 'Watch',
  },
  {
    url: post_3,
    format: 'Article',
    format_icon: 'files',
    direction: 'Design',
    date: 'August 8, 2020',
    time: null,
    title: 'Should you choose a creative profession if you are attracted to creativity?',
    text: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
    method: 'Read',
  },
];

const Blog = () => {
  return (
    <div className={styled.container}>
      <div className={styled.headWrapper}>
        <div className={styled.titleWrapper}>
          <h3>Our blog</h3>
          <h2>Latest posts</h2>
        </div>
        <div className={styled.btnWrapper}>
          <LargeButton title='Go to blog' />
        </div>
      </div>

      <div className={styled.postsWrapper}>
        {data.map(
          (
            { url, format, format_icon, direction, date, time, title, text, method },
            index,
          ) => {
            return (
              <Post
                key={index}
                url={url}
                format={format}
                format_icon={format_icon}
                direction={direction}
                date={date}
                time={time}
                title={title}
                text={text}
                method={method}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export { Blog };
