import React, { useRef, useState, useEffect } from 'react';
import './Map.css';
import MapContext from './MapContext';
import * as ol from 'ol';

export default function Map({ children, zoom, center }) {
	const mapRef = useRef();
	const [map, setMap] = useState(null);
	// Crear mapa
	useEffect(() => {
		let options = {
			view: new ol.View({ zoom, center }),
			layers: [],
			controls: [],
			overlays: [],
		};
		let mapObject = new ol.Map(options);
		mapObject.setTarget(mapRef.current);
		setMap(mapObject);
		return () => mapObject.setTarget(undefined);
	}, []);
	// Manejar zoom
	useEffect(() => {
		if (!map) return;
		map.getView().setZoom(zoom);
	}, [zoom]);
	// Manejar centro
	useEffect(() => {
		if (!map) return;
		map.getView().setCenter(center);
	}, [center]);
	return (
		<MapContext.Provider value={{ map }}>
			<div ref={mapRef} className="ol-map">
				{children}
			</div>
		</MapContext.Provider>
	);
}
