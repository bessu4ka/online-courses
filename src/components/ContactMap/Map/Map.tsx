import { FC, useCallback, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';

import styled from './Map.module.scss';

type coordinatesType = {
  lat: number;
  lng: number;
};

interface IProps {
  center: coordinatesType;
}

const containerStyle = {
  width: '705px',
  height: '412px',
};

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

const Map: FC<IProps> = ({ center }) => {
  const mapRef = useRef(undefined);

  const onLoad = useCallback((map: any) => {
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
