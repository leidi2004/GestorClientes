import { Nav } from "../../components/Layout/Nav/Nav"
import { CustomerForm } from "../../components/Forms/CustomerForm/CustomerForm"
import styles from "./CustomerManagement.module.css"
export const CustomerManagement = () => {
  return (
    <main>
      <Nav/>
      <h2 className={styles.main__title}>Gestionar Cliente</h2>
      <CustomerForm/>
    </main>
  )
}
