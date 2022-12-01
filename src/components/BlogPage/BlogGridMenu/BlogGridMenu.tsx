import { useState } from 'react';

import { Pagination } from 'components/Pagination';
import sprite from 'images/sprite.svg';

import styled from './BlogGridMenu.module.scss';

const dataTabs = [
  { title: 'All', svg: null },
  { title: 'Articles', svg: 'files' },
  { title: 'Videos', svg: 'play-blog' },
  { title: 'Podcasts', svg: 'micro' },
];

const BlogGridMenu = () => {
  const [activeTab, setActiveTab] = useState(0);

  function toggleActiveTab(index: number): void {
    setActiveTab(index);
  }

  return (
    <div className={styled.container}>
      <h3>Our blog</h3>
      <h2>Createx School Journal</h2>

      <div className={styled.menu}>
        <nav>
          {dataTabs.map(({ title, svg }, index) => {
            return (
              <button
                key={index}
                className={activeTab === index ? styled.activeTab : styled.tab}
                onClick={() => toggleActiveTab(index)}>
                <span>{title}</span>
                {svg && (
                  <svg>
                    <use href={sprite + `#${svg}`} />
                  </svg>
                )}
              </button>
            );
          })}
        </nav>

        <div className={styled.selectWrapper}>
          <div className={styled.category}>
            <span>Blog category</span>
            <select name='' id='category'>
              <option value='all themes'>all themes</option>
            </select>
          </div>
          <input type='search' placeholder='Search blog...' />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export { BlogGridMenu };
