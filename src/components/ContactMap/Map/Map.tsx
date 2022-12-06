import { FC, useCallback, useRef, useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';

import styled from './Map.module.scss';

type coordinatesType = {
  lat: number;
  lng: number;
};

interface IProps {
  center: coordinatesType;
}

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: true,
  fullscreenControl: false,
};

const initialContainerStyle = { width: '705px', height: '412px' };

const Map: FC<IProps> = ({ center }) => {
  const [containerStyle, setContainerStyle] = useState(initialContainerStyle);
  const mapRef = useRef<google.maps.Map | undefined>(undefined);

  useEffect(() => {
    window.addEventListener('resize', currentWidth);
    currentWidth();
    return () => window.removeEventListener('resize', currentWidth);
  }, []);

  function currentWidth() {
    if (window.screen.width <= 768) {
      setContainerStyle({
        width: '390px',
        height: '400px',
      });
    } else {
      setContainerStyle(initialContainerStyle);
    }
  }

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  return (
    <div className={styled.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      />
    </div>
  );
};

export { Map };
