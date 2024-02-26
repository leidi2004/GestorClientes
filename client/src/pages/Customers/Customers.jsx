import { CustomerList } from "../../components/Customer/CustomerList/CustomerList"
import { Nav } from "../../components/Layout/Nav/Nav"
import styles from "./Customers.module.css"
export const Customers = () => {
  return (
    <>
      <Nav/>
      <main className={styles.main}>
        <h2 className={styles.main__title}>Mis Clientes</h2>
        <CustomerList/>
      </main>
    </>
  )
}

