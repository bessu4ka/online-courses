import { useState } from 'react';

import sprite from 'images/sprite.svg';

import styled from './GridListToggleEvents.module.scss';

const GridListToggleEvents = () => {
  const [isList, setIsList] = useState(true);
  const [eventsPerPage, setEventsPerPage] = useState<string>('9');

  function toggleView() {
    setIsList((prev) => !prev);
  }

  return (
    <div className={styled.container}>
      <h3>Our events</h3>

      <h2>Lectures, workshops & master-classes</h2>

      <div className={styled.sortMenu}>
        {/* event category */}
        <div className={styled.select}>
          <p>Event category</p>
          <select name='' id=''>
            <option value=''>all themes</option>
          </select>
        </div>

        {/* sort by */}
        <div className={styled.select}>
          <p>Sort by</p>
          <select name='' id=''>
            <option value=''>newest</option>
          </select>
        </div>

        {/* show */}
        <div className={styled.select}>
          <p>Show</p>
          <input
            value={eventsPerPage}
            onChange={(e) => setEventsPerPage(e.target.value)}
            type='number'
            className={styled.showInput}
          />
          <span>events per page</span>
        </div>

        {/* search */}
        <input type='search' placeholder='Search event...' className={styled.search} />

        {/* toggle list/grid */}
        <div className={styled.toggleMenu}>
          <svg
            className={isList ? styled.activeSvg : styled.noActiveSvg}
            onClick={toggleView}>
            <use href={sprite + '#list'} />
          </svg>

          <svg
            className={!isList ? styled.activeSvg : styled.noActiveSvg}
            onClick={toggleView}>
            <use href={sprite + '#grid'} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export { GridListToggleEvents };
