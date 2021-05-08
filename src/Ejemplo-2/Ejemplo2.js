import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOSM from 'ol/source/OSM';
import { useEffect, useState } from 'react';
export default function Ejemplo2() {
	const [state, setState] = useState({
		center: [0, 0],
		zoom: 1,
	});
	const [olMap, setOlMap] = useState(
		new OlMap({
			target: null,
			layers: [
				new OlLayerTile({
					source: new OlSourceOSM(),
				}),
			],
			view: new OlView({
				center: state.center,
				zoom: state.zoom,
			}),
		})
	);
	useEffect(() => {
		olMap.getView().setCenter(state.center);
		olMap.getView().setZoom(state.zoom);
		// console.log(state);
	}, [state]);

	useEffect(() => {
		olMap.setTarget('map');
		olMap.on('moveend', () => {
			let center = olMap.getView().getCenter();
			let zoom = olMap.getView().getZoom();
			setState({ center, zoom });
		});
	}, []);
	const userAction = () => {
		setState({ center: [-8445647.765012862, -1193247.3085863534], zoom: 5 });
	};
	return (
		<div id="map" style={{ width: '100%', height: '600px' }}>
			<button onClick={(e) => userAction()}>setState on click</button>
		</div>
	);
}
