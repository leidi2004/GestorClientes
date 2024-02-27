import styles from './CustomerForm.module.css'
export const CustomerForm = () => {
	return (
		<>
			<form action='' className={styles.form}>
				<label htmlFor='identificacion' className={styles.form__label}>Identificación</label>
				<input
					type='number'
					name='identificacion'
					id='identificacion'
					placeholder='104578579'
					className={styles.form__input}
				/>
				<label htmlFor='tipoIdentificacion' className={styles.form__label}>Tipo de identificación</label>
				<select name='' id='tipoIdentificacion' className={styles.form__select}>
					<option value='RC'>Registro Civil</option>
					<option value='TI'>Tarjeta De Identidad</option>
					<option value='CC'>Cedula De Ciudadanía</option>
				</select>
				<label htmlFor='primerNombre' className={styles.form__label}>Primer Nombre</label>
				<input type='text' name='' id='primerNombre' placeholder='Jonathan' className={styles.form__input} />
				<label htmlFor='segundoNombre' className={styles.form__label}>Segundo Nombre</label>
				<input type='text' name='' id='segundoNombre' placeholder='David' className={styles.form__input} />
				<label htmlFor='primerApellido' className={styles.form__label}>Primer Apellido</label>
				<input type='text' name='' id='primerApellido' placeholder='Smith' className={styles.form__input} />
				<label htmlFor='segundoApellido' className={styles.form__label}>Segundo Apellido</label>
				<input type='text' name='' id='segundoApellido' placeholder='Warner' className={styles.form__input} />
				<label htmlFor='direccion' className={styles.form__label}>Dirección</label>
				<input
					type='text'
					name=''
					id='direccio'
					placeholder='San Luis Mz E L8 Carrera 200A' className={styles.form__input}
				/>
				<label htmlFor='telefono' className={styles.form__label}>Telefono</label>
				<input type='tel' name='' id='telefono' placeholder='3235783997' className={styles.form__input}/>
				<label htmlFor='email' className={styles.form__label}>E-Mail</label>
				<input
					type='email'
					name=''
					id='email'
					placeholder='jonathand@gmail.com' className={styles.form__input}
				/>
				<label htmlFor='ocupacion' className={styles.form__label}>Ocupación</label>
				<input type='text' name='' id='ocupacion' placeholder='CEO' className={styles.form__input} />
				<label htmlFor='fechaNacimiento' className={styles.form__label}>Fecha de nacimiento</label>
				<input type='date' name='' id='fechaNacimiento' className={styles.form__input} />
				<label htmlFor='foto' className={styles.form__label}>Foto</label>
				<input type='file' name='' id='foto' className={styles.form__input} />
				<input type="button" value="Enviar" className={styles.form__button}/>
			</form>
		</>
	);
};
