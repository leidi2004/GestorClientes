import { CustomerList } from "../../components/Customer/CustomerList/CustomerList"
import { Nav } from "../../components/Layout/Nav/Nav"

export const Customers = () => {
  return (
    <>
      <Nav/>
      <main>
        <CustomerList/>
      </main>
    </>
  )
}

