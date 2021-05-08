import { Link } from 'react-router-dom';
export default function Inicio() {
	return (
		<div>
			<h1>Rutas</h1>
			<Link to="/ejemplo1">Ejemplo1</Link>
			<Link to="/ejemplo2">Ejemplo2</Link>
		</div>
	);
}
