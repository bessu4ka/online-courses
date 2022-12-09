import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// React-Swiper-styles
import 'swiper/css';

// ------------------------
import { useSlideCount } from 'hooks/useSlideCount';
import { courses_1, courses_2, courses_3, courses_4 } from 'images/homePage';
import { Slide } from './Slide';
import sprite from 'images/sprite.svg';

import styled from './TeamSwiper.module.scss';

const data = [
  { url: courses_1, name: 'Dianne Russell', position: 'Founder and CEO' },
  { url: courses_2, name: 'Jerome Bell', position: 'Founder and Program Director' },
  {
    url: courses_3,
    name: 'Kristin Watson',
    position: 'Marketer, Curator of Marketing Course',
  },
  {
    url: courses_4,
    name: 'Marvin McKinney',
    position: 'PM, Curator of Management Course',
  },
];

const TeamSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const numberOfSlides = useSlideCount();

  return (
    <section className={styled.content}>
      {/* swiper navigation */}
      <div className={styled.navigation}>
        <div ref={navigationPrevRef}>
          <svg>
            <use href={sprite + '#left'} />
          </svg>
        </div>
        <div ref={navigationNextRef}>
          <svg>
            <use href={sprite + '#right'} />
          </svg>
        </div>
      </div>

      {/* swiper */}
      <div className={styled.container}>
        <Swiper
          slidesPerView={numberOfSlides}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper: any) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[Navigation]}>
          {data.map(({ url, name, position }, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide url={url} name={name} position={position} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export { TeamSwiper };
