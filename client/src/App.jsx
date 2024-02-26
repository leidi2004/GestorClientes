import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {LogIn} from './pages/LogIn/LogIn'
import {Index} from './pages/Index/Index'
import {Customers} from './pages/Customers/Customers'
import {CustomerDetails} from './pages/CustomerDetails/CustomerDetails'
import {CustomerForm} from './pages/CustomerForm/CustomerForm'
import {NotFound} from './pages/NotFound/NotFound'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LogIn/>}/>
            <Route path='/inicio' element={<Index/>}/>
            <Route path='/clientes' element={<Customers/>}/>
            <Route path='/gestion-cliente' element={<CustomerForm/>}/>
            <Route path='/detalles-cliente' element={<CustomerDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
