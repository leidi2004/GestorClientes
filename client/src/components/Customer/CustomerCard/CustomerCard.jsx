import { PropTypes } from 'prop-types';
import styles from './CustomerCard.module.css'
import { Link } from 'react-router-dom';
import { FaRegTrashCan, FaPencil} from "react-icons/fa6";
import {useDeleteClienteMutation} from "../../../features/apiSlice"

export const CustomerCard = ({ customer }) => {

	const [ deleteCliente ] = useDeleteClienteMutation();
	return (
		<div className={styles.card}>
			<img src={customer.foto} alt='foto del cliente' className={styles.card__img}/>
			<div>
				<p className={styles.card__textBold}>{customer.primerNombre + " " + customer.primerApellido}</p>
				<p className={styles.card__text}>{customer.telefono}</p>
				<p className={styles.card__text}>{customer.email}</p>
                <Link className={styles.card__link} to={`/detalles-cliente/${customer.identificacion}`}>Ver Mas</Link>
			</div>
            <div className={styles.card__buttonContainer}>
                <button type="button" className={styles.card__buttonDelete} onClick={()=>{deleteCliente(customer.identificacion)}}><FaRegTrashCan /></button>
                <Link to={`/editar-cliente/${customer.identificacion}`}><FaPencil /></Link>
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
