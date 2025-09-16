import React, { useMemo } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

type MapaProps = {
  center: { lat: number; lng: number };
};

const Mapa = ({ center }: MapaProps) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBlwQdn2BtOerbHp1RYgGYx-2YpTIMn4mM",
  });

 
  const options = useMemo(
    () => ({

    }),
    []
  );

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      options={options} 
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div>Carregando Mapa...</div>
  );
};

export default React.memo(Mapa);