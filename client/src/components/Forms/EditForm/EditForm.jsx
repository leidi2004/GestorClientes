import styles from './EditForm.module.css';
import { useForm } from 'react-hook-form';
import { useEditClienteMutation } from '../../../features/apiSlice';
import { useParams } from 'react-router-dom';

export const EditForm = () => {
	const [editClient] = useEditClienteMutation();
	const {identificacion} = useParams();
	
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm();

	const handleCustomer = data => {
		console.log(data);
		editClient(data)
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleCustomer)} className={styles.form}>
				<label htmlFor='identificacion' className={styles.form__label}>
					Identificación
				</label>
				<input
					type='number'
					id='identificacion'
					placeholder='104578579'
					className={styles.form__input}
					{...register('identificacion', {
						required: {
							value: true,
							message: 'El numero identificación es requerido',
						},
						minLength: {
							value: 6,
							message:
								'El numero de identidad debe tener al menos seis numeros',
						},
					})}
				/>
				{errors.identificacion && (
					<span className={styles.form__span}>
						{errors.identificacion.message}
					</span>
				)}
				<label htmlFor='tipoIdentificacion' className={styles.form__label}>
					Tipo de identificación
				</label>
				<select
					id='tipoIdentificacion'
					className={styles.form__select}
					{...register('tipoIdentificacion', {
						required: {
							value: true,
							message: 'El tipo de identificación es requerido',
						},
					})}
				>
					<option value='RC'>Registro Civil</option>
					<option value='TI'>Tarjeta De Identidad</option>
					<option value='CC'>Cedula De Ciudadanía</option>
				</select>
				{errors.tipoIdentificacion && (
					<span className={styles.form__span}>
						{errors.tipoIdentificacion.message}
					</span>
				)}
				<label htmlFor='primerNombre' className={styles.form__label}>
					Primer Nombre
				</label>
				<input
					type='text'
					id='primerNombre'
					placeholder='Jonathan'
					className={styles.form__input}
					{...register('primerNombre', {
						required: {
							value: true,
							message: 'El primer nombre es requerido',
						},
						minLength: {
							value: 2,
							message: 'El primer nombre debe tener al menos dos caracteres',
						},
						maxLength: {
							value: 20,
							message: 'El primer nombre debe ser menor a 20 caracteres',
						},
						pattern: {
							value: /^[A-Za-z]+$/,
							message: 'Por favor, solo ingresar letras',
						},
					})}
				/>
				{errors.primerNombre && (
					<span className={styles.form__span}>
						{errors.primerNombre.message}
					</span>
				)}
				<label htmlFor='segundoNombre' className={styles.form__label}>
					Segundo Nombre
				</label>
				<input
					type='text'
					{...register('segundoNombre', {
						pattern: {
							value: /^[A-Za-z]+$/,
							message: 'Por favor, solo ingresar letras',
						},
					})}
					id='segundoNombre'
					placeholder='David'
					className={styles.form__input}
				/>
				{errors.segundoNombre && (
					<span className={styles.form__span}>
						{errors.segundoNombre.message}
					</span>
				)}
				<label htmlFor='primerApellido' className={styles.form__label}>
					Primer Apellido
				</label>
				<input
					type='text'
					id='primerApellido'
					placeholder='Smith'
					className={styles.form__input}
					{...register('primerApellido', {
						required: {
							value: true,
							message: 'El primer apellido es requerido',
						},
						minLength: {
							value: 2,
							message: 'El primer apellido debe tener al menos dos caracteres',
						},
						maxLength: {
							value: 20,
							message: 'El primer apellido debe ser menor a 20 caracteres',
						},
						pattern: {
							value: /^[A-Za-z]+$/,
							message: 'Por favor, solo ingresar letras',
						},
					})}
				/>
				{errors.primerApellido && (
					<span className={styles.form__span}>
						{errors.primerApellido.message}
					</span>
				)}
				<label htmlFor='segundoApellido' className={styles.form__label}>
					Segundo Apellido
				</label>
				<input
					type='text'
					id='segundoApellido'
					placeholder='Warner'
					className={styles.form__input}
					{...register('segundoApellido', {
						pattern: {
							value: /^[A-Za-z]+$/,
							message: 'Por favor, solo ingresar letras',
						},
					})}
				/>
				{errors.segundoApellido && (
					<span className={styles.form__span}>
						{errors.segundoApellido.message}
					</span>
				)}
				<label htmlFor='direccion' className={styles.form__label}>
					Dirección
				</label>
				<input
					type='text'
					id='direccion'
					placeholder='San Luis Mz E L8 Carrera 200A'
					className={styles.form__input}
					{...register('direccion')}
				/>
				<label htmlFor='telefono' className={styles.form__label}>
					Telefono
				</label>
				<input
					type='number'
					id='telefono'
					placeholder='3235783997'
					className={styles.form__input}
					{...register('telefono', {
						required: {
							value: true,
							message: 'El número de telefono es obligatorio',
						},
						pattern: {
							value: /^[0-9]+$/,
							message: 'Por favor, ingrese solo números',
						},
					})}
				/>
				{errors.telefono && (
					<span className={styles.form__span}>{errors.telefono.message}</span>
				)}
				<label htmlFor='email' className={styles.form__label}>
					E-Mail
				</label>
				<input
					type='email'
					id='email'
					placeholder='jonathand@gmail.com'
					className={styles.form__input}
					{...register('email', {
						required: {
							value: true,
							message: 'El e-mail es obligatorio',
						},
						pattern: {
							value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							message: 'Por favor, ingresar un correo electronico valido',
						},
					})}
				/>
				{errors.email && (
					<span className={styles.form__span}>{errors.email.message}</span>
				)}
				<label htmlFor='ocupacion' className={styles.form__label}>
					Ocupación
				</label>
				<input
					type='text'
					id='ocupacion'
					placeholder='CEO'
					className={styles.form__input}
					{...register('ocupacion')}
				/>
				<label htmlFor='fechaNacimiento' className={styles.form__label}>
					Fecha de nacimiento
				</label>
				<input
					type='date'
					id='fechaNacimiento'
					className={styles.form__input}
					{...register('fechaNacimiento', {
						required: {
							value: true,
							message: 'Fecha de nacimiento obligatoria',
						},
						validate: value => {
							const fechaNacimiento = new Date(value);
							const fechaActual = new Date();
							const edad =
								fechaActual.getFullYear() - fechaNacimiento.getFullYear();
							const tipoIdentificacion = getValues('tipoIdentificacion');

							if (fechaNacimiento.getTime() === fechaActual.getTime()) {
								return 'Fecha de nacimiento no válida';
							} else if (
								(edad < 7 && tipoIdentificacion !== 'RC') ||
								(edad >= 7 && tipoIdentificacion !== 'TI') ||
								(edad >= 18 && tipoIdentificacion !== 'CC')
							) {
								return 'El tipo de identificación no concuerda con la fecha de nacimiento';
							}

							return true;
						},
					})}
				/>
				{errors.fechaNacimiento && (
					<span className={styles.form__span}>
						{errors.fechaNacimiento.message}
					</span>
				)}
				<label htmlFor='foto' className={styles.form__label}>
					Foto
				</label>
				<input type='file' id='foto' className={styles.form__input} {...register("foto")}/>
				<input type='submit' value='Enviar' className={styles.form__button} />
			</form>
		</>
	);
};
