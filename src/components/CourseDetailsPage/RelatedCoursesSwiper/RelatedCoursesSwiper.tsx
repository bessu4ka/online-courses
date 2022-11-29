import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useRef } from 'react';

import { Card } from './Card';
import sprite from 'images/sprite.svg';
import { courses_1, courses_2, courses_3, courses_4 } from 'images/homePage';

import 'swiper/css';
import styled from './RelatedCoursesSwiper.module.scss';

const data = [
  {
    url: courses_1,
    name: 'Kristin Watson',
    price: '350',
    direction: 'Marketing',
    title: 'The Ultimate Google Ads Training Course',
  },
  {
    url: courses_2,
    name: 'Guy Hawkins',
    price: '400',
    direction: 'Management',
    title: 'Graphic Design Basic',
  },
  {
    url: courses_3,
    name: 'Dianne Russell',
    price: '220',
    direction: 'Design',
    title: 'Business Development Management',
  },
  {
    url: courses_4,
    name: 'Cody Fisher',
    price: '599',
    direction: 'HR & Recruting',
    title: 'Brand Management & PR Communications',
  },
];

const RelatedCoursesSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className={styled.container}>
      <>
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
            slidesPerView={2}
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
            {data.map(({ url, name, direction, price, title }, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card
                    url={url}
                    name={name}
                    direction={direction}
                    price={price}
                    title={title}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </>
    </section>
  );
};

export { RelatedCoursesSwiper };
