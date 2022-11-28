import styled from './Steps.module.scss';

const data = [
  {
    order: '01',
    title: 'Watching online video lectures',
    text: `Culpa nostrud commodo ea consequat aliquip reprehenderit.
					Veniam velit nostrud aliquip sunt.`,
  },
  {
    order: '02',
    title: 'Passing test',
    text: `Anim reprehenderit sint voluptate exercitation adipisicing
					laborum adipisicing. Minim ad tempor est ea.`,
  },
  {
    order: '03',
    title: 'Curator’s feedback',
    text: `Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
					dolore et ad et veniam ad deserunt.`,
  },
  {
    order: '04',
    title: 'Corrections if needed',
    text: `Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit
					voluptate ullamco proident ea ad.`,
  },
];

const Steps = () => {
  return (
    <section className={styled.container}>
      <h3>Main steps</h3>
      <h2>Online learning process</h2>
      <div className={styled.steps}>
        {data.map(({ order, title, text }, index) => {
          return (
            <div key={index} className={styled.step}>
              <div className={styled.orderWrapper}>
                <div className={styled.order}>{order}</div>
              </div>
              <div className={styled.title}>{title}</div>
              <div className={styled.text}>{text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export { Steps };
