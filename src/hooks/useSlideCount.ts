import { useState, useEffect } from 'react';
import { useGetCurrentWidth } from './useGetCurrentWidth';

export const useSlideCount = () => {
  const [amountSlide, setAmountSlide] = useState(0);
  const width = useGetCurrentWidth();

  useEffect(() => {
    if (width > 1240) setAmountSlide(4);
    if (width <= 1240) setAmountSlide(3);
    if (width <= 920) setAmountSlide(2);
    if (width <= 600) setAmountSlide(1);
  }, [width]);

  return amountSlide;
};
