import { Nav } from '../../components/Layout/Nav/Nav';
import {Link} from 'react-router-dom';
import styles from './Index.module.css'
export const Index = () => {
	return (
		<>
			<Nav />
			<main className={styles.main}>
				<h2 className={styles.main__title}>Bienvenido</h2>
				<p className={styles.main__text}>Comienza a gestionar todos tus clientes</p>
				<Link to='/clientes' className={styles.main__link}>Mis clientes</Link>
			</main>
		</>
	);
};
