import { useRef, useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './CoursesBlock.module.scss';

const tabs = [
  { title: 'All', count: 17 },
  { title: 'Marketing', count: 4 },
  { title: 'Management', count: 3 },
  { title: 'HR & Recruting', count: 5 },
  { title: 'Design', count: 2 },
  { title: 'Development', count: 3 },
];



const CoursesBlock = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function setFocus() {
    inputRef.current && inputRef.current.focus();
  }

  function changeTab(index: number): void {
    setCurrentTab(index);
  }

  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <h3>Enjoy your studying!</h3>
        <h2>Our online courses</h2>

        <aside className={styled.menu}>
          <div className={styled.tabsWrapper}>
            {tabs.map(({ title, count }, index) => {
              return (
                <div
                  key={index}
                  onClick={() => changeTab(index)}
                  className={currentTab === index ? styled.activeTab : styled.tab}>
                  <p>{title}</p>
                  <span>{count}</span>
                </div>
              );
            })}
          </div>

          <div className={styled.inputWrapper}>
            <input type='text' placeholder='Search course...' ref={inputRef} />
            <svg onClick={setFocus}>
              <use href={sprite + '#search'} />
            </svg>
          </div>
        </aside>


      </div>
    </div>
  );
};

export { CoursesBlock };
