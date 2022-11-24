import { OutlineLargeButton } from 'components/Buttons/OutLineLargeButton';
import { Card } from './Card';
import { courses_1, courses_2, courses_3 } from 'images/homePage/index';

import styled from './Courses.module.scss';

const data = [
  {
    url: courses_1,
    sphere: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
    price: '100',
    name: 'Jerome Bell',
  },
  {
    url: courses_2,
    sphere: 'Management',
    title: 'Product Management Fundamentals',
    price: '480',
    name: 'Marvin McKinney',
  },
  {
    url: courses_3,
    sphere: 'HR & Recruting',
    title: 'HR  Management and Analytics',
    price: '200',
    name: 'Leslie Alexander Li',
  },
  {
    url: courses_1,
    sphere: 'Marketing',
    title: 'Brand Management & PR Communications',
    price: '530',
    name: 'Kristin Watson',
  },
  {
    url: courses_2,
    sphere: 'Management',
    title: 'Business Development Management',
    price: '400',
    name: 'Dianne Russell',
  },
  {
    url: courses_3,
    sphere: 'Design',
    title: 'Graphic Design Basic',
    price: '500',
    name: 'Guy Hawkins',
  },
];

const Courses = () => {
  return (
    <div className={styled.container}>
      <aside>
        <div>
          <h3>Ready to learn?</h3>
          <h2>Featured Courses</h2>
        </div>

        <div className={styled.btnWrapper}>
          <OutlineLargeButton title='View all courses' />
        </div>
      </aside>

      <div className={styled.ListWrapper}>
        {data.map(({ url, sphere, title, price, name }, index) => {
          return (
            <Card
              key={index}
              url={url}
              sphere={sphere}
              title={title}
              price={price}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Courses };
