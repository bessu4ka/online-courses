import {
  team_1,
  team_2,
  team_3,
  team_4,
  team_5,
  team_6,
  team_7,
  team_8,
} from 'images/aboutUsPage';

import styled from './Team.module.scss';

const data = [
  { img: team_1, name: 'Dianne Russell', direction: 'Founder and CEO' },
  { img: team_2, name: 'Jerome Bell', direction: 'Founder and Program Director' },
  {
    img: team_3,
    name: 'Kristin Watson',
    direction: 'Marketer, Curator of Marketing Course',
  },
  { img: team_4, name: 'Marvin McKinney', direction: 'PM, Curator of Management Course' },
  {
    img: team_5,
    name: 'Leslie Alexander Li',
    direction: 'Curator of HR & Recruting Course',
  },
  { img: team_6, name: 'Kathryn Murphy', direction: 'Analyst and Marketing specialist' },
  { img: team_7, name: 'Brooklyn Simmons', direction: 'Curator of Development Course' },
  {
    img: team_8,
    name: 'Cody Fisher',
    direction: 'UX Designer, Curator of Design Course',
  },
];

const Team = () => {
  return (
    <section className={styled.container}>
      <h3>Best tutors are all here</h3>
      <h2>Meet our team</h2>
      <ul>
        {data.map(({ img, name, direction }, index) => {
          return (
            <li key={index}>
              <div className={styled.substrate}>
                <img src={img} alt='person' />
              </div>
              <span className={styled.name}>{name}</span>
              <span className={styled.direction}>{direction}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { Team };
