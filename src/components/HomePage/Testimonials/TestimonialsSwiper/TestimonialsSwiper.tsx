import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

import { Slide } from './Slide';
import { user_1, user_2, user_3 } from 'images/homePage';
import sprite from 'images/sprite.svg';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import './styles.scss';

import styled from './TestimonialsSwiper.module.scss';

const data = [
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam 
		viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis 
		tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque 
		pharetra arcu diam maecenas diam integer in.`,
    name: 'Eleanor Pena',
    position: 'Position, Course',
    url: user_1,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellendus non maiores
		voluptatem illo dolorem fugiat molestias enim ipsa voluptas laboriosam neque reiciendis quae
		ipsam quis accusantium voluptates, cum tenetur.`,
    name: 'Valeria Golino',
    position: 'Position, Course',
    url: user_2,
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, perspiciatis adipisci facilis
		architecto similique expedita hic quo praesentium, tenetur dignissimos non aspernatur consequatur
		aliquam et asperiores in vero reprehenderit quos!`,
    name: 'Kristen Noel',
    position: 'Position, Course',
    url: user_3,
  },
];

const TestimonialsSwiper = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className={styled.container}>
      <div ref={navigationPrevRef} className={styled.navigation}>
        <svg>
          <use href={sprite + '#left'} />
        </svg>
      </div>

      <div>
        <Swiper
          className={styled.swiper}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
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
          }}>
          {data.map(({ text, name, position, url }, index) => {
            return (
              <SwiperSlide key={index}>
                <Slide text={text} name={name} position={position} url={url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div ref={navigationNextRef} className={styled.navigation}>
        <svg>
          <use href={sprite + '#right'} />
        </svg>
      </div>
    </div>
  );
};

export { TestimonialsSwiper };
