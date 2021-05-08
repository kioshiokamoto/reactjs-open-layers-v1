import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Ejemplo1 from './Ejemplo-1/Ejemplo1';
import Ejemplo2 from './Ejemplo-2/Ejemplo2';
import Inicio from './Inicio';
export default function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Inicio} />
					<Route path="/ejemplo1" component={Ejemplo1} />
					<Route path="/ejemplo2" component={Ejemplo2} />
				</Switch>
			</Router>
		</>
	);
}
