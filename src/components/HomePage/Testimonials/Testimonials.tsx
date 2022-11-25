import { TestimonialsSwiper } from './TestimonialsSwiper';

import styled from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <div className={styled.container}>
      <h3>TESTIMONIALS</h3>
      <h2>What our students say</h2>
      <TestimonialsSwiper />
    </div>
  );
};

export { Testimonials };
