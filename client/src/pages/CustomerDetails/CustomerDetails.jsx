import { Nav } from "../../components/Layout/Nav/Nav"
import { Customer } from "../../components/Customer/Customer/Customer"


export const CustomerDetails = () => {
  const cliente = {
    "identificacion": "123456789",
    "tipoIdentificacion": "Cédula",
    "primerNombre": "Juan",
    "segundoNombre": "Pablo",
    "primerApellido": "Gomez",
    "segundoApellido": "Martinez",
    "direccion": "Calle 123, Ciudad",
    "telefono": "555-1234",
    "email": "juan@gmail.com",
    "ocupacion": "Ingeniero",
    "fechaNacimiento": "1990-05-15",
    "foto": "https://i.pinimg.com/736x/26/69/11/26691192fc3011381a5ea5d31bac1097.jpg"
  }
  return (
    <main>
      <Nav/>
      <Customer cliente={cliente} />
    </main>
  )
}

