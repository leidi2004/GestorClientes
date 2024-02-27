import {CustomerCard} from "../CustomerCard/CustomerCard"
import styles from './CustomerList.module.css'
import { useGetClientesQuery } from "../../../features/apiSlice"

export const CustomerList = () => {
  const { data} = useGetClientesQuery();
  
  return (
    <section className={styles.section}>
         {data && data.map((customer) => (
        <CustomerCard customer={customer} key={customer.identificacion} />
      ))}
    </section>
  )
}
