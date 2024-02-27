import { Link } from 'react-router-dom';
import imagen404  from '../../assets/img/NotFoundImg.jpg';
import styles from './NotFound.module.css'
export const NotFound = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.main__title}>Pagina No Encontrada</h1>
			<img className={styles.main__img} src={imagen404} alt='imagen de pagina no encontrada' />
			<Link className={styles.main__link} to='/'>Volver al inicio</Link>
		</main>
	);
};
