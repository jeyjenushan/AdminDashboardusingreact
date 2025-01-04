
import { Route, Routes } from 'react-router-dom'
import Layout from './Components/shared/Layout'
import Dashboard from './Components/Dashboard'
import Products from './Components/Products'


function App() {


  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='products' element={<Products/>}/>
      </Route>
    </Routes>




  )
}

export default App
