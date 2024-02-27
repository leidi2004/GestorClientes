import { PropTypes } from 'prop-types';
import styles from './Customer.module.css';
import moment from 'moment';
export const Customer = ({ cliente }) => {
	return (
		<section className={styles.section}>
			<img
				src={cliente.foto}
				alt='foto del cliente'
				className={styles.section__img}
			/>
			<div className={styles.section__wrapper}>
				<div>
					<p className={styles.section__textBold}>Nombres</p>
					<p className={styles.section__text}>
						{cliente.primerNombre + ' ' + cliente.segundoNombre}
					</p>
					<p className={styles.section__textBold}>Apellidos</p>
					<p className={styles.section__text}>
						{cliente.primerApellido + ' ' + cliente.segundoApellido}
					</p>
					<p className={styles.section__textBold}>Documento</p>
					<p className={styles.section__text}>
						{cliente.tipoIdentificacion + ' ' + cliente.identificacion}
					</p>
					<p className={styles.section__textBold}>FechaNacimiento</p>
					<p className={styles.section__text}>{moment(cliente.fechaNacimiento).format('DD/MMMM/YYYY')}</p>
				</div>
				<div>
					<p className={styles.section__textBold}>Telefono</p>
					<p className={styles.section__text}>{cliente.telefono}</p>
					<p className={styles.section__textBold}>E-mail</p>
					<p className={styles.section__text}>{cliente.email}</p>
					<p className={styles.section__textBold}>Dirección</p>
					<p className={styles.section__text}>{cliente.direccion}</p>
					<p className={styles.section__textBold}>Ocupación</p>
					<p className={styles.section__text}>{cliente.ocupacion}</p>
				</div>
			</div>
		</section>
	);
};

Customer.propTypes = {
	cliente: PropTypes.shape({
		identificacion: PropTypes.number.isRequired,
		tipoIdentificacion: PropTypes.string.isRequired,
		primerNombre: PropTypes.string.isRequired,
		segundoNombre: PropTypes.string,
		primerApellido: PropTypes.string.isRequired,
		segundoApellido: PropTypes.string,
		direccion: PropTypes.string,
		telefono: PropTypes.number.isRequired,
		email: PropTypes.string.isRequired,
		ocupacion: PropTypes.string,
		fechaNacimiento: PropTypes.string.isRequired,
		foto: PropTypes.string,
	}),
};
