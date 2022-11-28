import { useNavigate } from 'react-router-dom';

import { LargeButton } from 'components/Buttons/LargeButton';

import styled from './EmptyPage.module.scss';

const EmptyPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styled.container}>
      <p>page not found</p>
      <div className={styled.btnWrapper} onClick={() => navigate(-1)}>
        <LargeButton title='Go back' />
      </div>
    </main>
  );
};

export { EmptyPage };
