import {CustomerCard} from "../CustomerCard/CustomerCard"

export const CustomerList = () => {
    const customers = [
        {
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
          },
          {
            "identificacion": "987654321",
            "tipoIdentificacion": "Pasaporte",
            "primerNombre": "Ana",
            "segundoNombre": "",
            "primerApellido": "Lopez",
            "segundoApellido": "Rodriguez",
            "direccion": "Avenida Principal, Ciudad",
            "telefono": "555-5678",
            "email": "ana@gmail.com",
            "ocupacion": "Doctora",
            "fechaNacimiento": "1985-08-22",
            "foto": "https://i.pinimg.com/736x/26/69/11/26691192fc3011381a5ea5d31bac1097.jpg"
          },        
    ]
  return (
    <div>
        {
            customers.map((customer)=>(<CustomerCard customer={customer} key={customer.identificacion}/>))
        }
    </div>
  )
}
