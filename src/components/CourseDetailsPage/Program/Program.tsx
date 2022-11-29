import { useState } from 'react';

import { program } from 'images/coursePage';
import sprite from 'images/sprite.svg';

import styled from './Program.module.scss';

const data = [
  {
    order: 1,
    title: 'Aliquet lectus urna viverra in odio.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 2,
    title: 'Orci commodo, viverra orci mollis ut euismod.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 3,
    title: 'Sagittis vitae facilisi rutrum amet mauris quisque vel.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 4,
    title: 'In id dolor quis nunc, urna hendrerit pharetra.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 5,
    title: 'Est, ut tempus id rutrum facilisi.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 6,
    title: 'Amet nec in pellentesque.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 7,
    title: 'Massa vel arcu mauris, id vel rhoncus mattis quis.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
  {
    order: 8,
    title: 'Neque, cursus sapien nullam id.',
    text: `
				Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
				aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
				mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
				porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
				vitae accumsan id.`,
  },
];

const Program = () => {
  const [isOpenedLessonText, setIsOpenedLessonText] = useState<number | null>(null);

  function changeLesson(order: number) {
    setIsOpenedLessonText(order);
  }

  function closeInformation(order: number) {
    setIsOpenedLessonText(null);
  }

  return (
    <section className={styled.container}>
      <div className={styled.listWrapper}>
        <h3>Course program</h3>
        <h2>What will you learn</h2>

        <ul>
          {data.map(({ order, title, text }, index) => {
            return (
              <li key={index}>
                <div className={styled.titleWrapper}>
                  {isOpenedLessonText === order ? (
                    <svg onClick={() => closeInformation(order)}>
                      <use href={sprite + '#minus'} />
                    </svg>
                  ) : (
                    <svg onClick={() => changeLesson(order)}>
                      <use href={sprite + '#plus'} />
                    </svg>
                  )}
                  <span onClick={() => changeLesson(order)}>Lesson {order}</span>
                  <p onClick={() => changeLesson(order)}>{title}</p>
                </div>

                <div
                  className={isOpenedLessonText === order ? styled.text : styled.noText}>
                  {text}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <img src={program} alt='program' />
    </section>
  );
};

export { Program };
