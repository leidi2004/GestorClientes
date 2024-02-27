import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Index} from './pages/Index/Index'
import {Customers} from './pages/Customers/Customers'
import {CustomerDetails} from './pages/CustomerDetails/CustomerDetails'
import {CustomerManagement} from './pages/CustomerManagement/CustomerManagement'
import {NotFound} from './pages/NotFound/NotFound'
import { EditForm } from './components/Forms/EditForm/EditForm'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/clientes' element={<Customers/>}/>
            <Route path='/gestion-cliente' element={<CustomerManagement/>}/>
            <Route path='/detalles-cliente/:identificacion' element={<CustomerDetails/>}/>
            <Route path='/editar-cliente/:identificacion' element={<EditForm/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
