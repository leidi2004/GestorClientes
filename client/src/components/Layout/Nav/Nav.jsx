import {Link} from 'react-router-dom';
import styles from './Nav.module.css'
import { IoPeopleCircleOutline } from "react-icons/io5";

export const Nav = () => {
	return (
		<nav className={styles.nav}>
            <div>
                <IoPeopleCircleOutline className={styles.nav__icon} />
            </div>
			<ul className={styles.ul}>
				<li className={styles.ul__li}><Link className={styles.nav__link} to='/'>Inicio</Link></li>
				<li className={styles.ul__li}><Link className={styles.nav__link} to='/clientes'>Clientes</Link></li>
				<li className={styles.ul__li}><Link className={styles.nav__link} to='/gestion-cliente'>Agregar Cliente</Link></li>
			</ul>
			<button className={styles.nav__button}>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            </button>
		</nav>
	);
};
