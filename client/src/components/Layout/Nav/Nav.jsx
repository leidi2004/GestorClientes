import {Link} from 'react-router-dom';
export const Nav = () => {
	return (
		<nav>
			<ul>
				<li><Link to='/inicio'>Inicio</Link></li>
				<li><Link to='/clientes'>Clientes</Link></li>
				<li><Link to='/gestion-cliente'>Agregar Cliente</Link></li>
			</ul>
			<button></button>
		</nav>
	);
};
