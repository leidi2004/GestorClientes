import { PropTypes } from 'prop-types';
import styles from './CustomerCard.module.css'
import { Link } from 'react-router-dom';
import { FaRegTrashCan,  FaPencil } from "react-icons/fa6";

export const CustomerCard = ({ customer }) => {
	return (
		<div className={styles.card}>
			<img src={customer.foto} alt='foto del cliente' className={styles.card__img}/>
			<div>
				<p className={styles.card__textBold}>{customer.primerNombre + " " + customer.primerApellido}</p>
				<p className={styles.card__text}>{customer.telefono}</p>
				<p className={styles.card__text}>{customer.email}</p>
                <Link className={styles.card__link} to={`user/${customer.identificacion}`}>Ver Mas</Link>
			</div>
            <div className={styles.card__buttonContainer}>
                <button type="button" className={styles.card__buttonDelete}><FaRegTrashCan /></button>
                <button type="button" className={styles.card__buttonEdit}><FaPencil /></button>
            </div>
		</div>
	);
};

CustomerCard.propTypes = {
	customer: PropTypes.shape({
		primerNombre: PropTypes.string.isRequired,
		primerApellido: PropTypes.string.isRequired,
		telefono: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
        identificacion: PropTypes.string.isRequired,
		foto: PropTypes.string,
	}),
};
