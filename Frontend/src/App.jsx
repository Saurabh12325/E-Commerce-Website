

import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
function App() {
 
  return (
    <>
  
      <div>
      <BrowserRouter>
        <Nav/>
       
        <Routes>
          <Route path='/' element={<h1>Product list</h1>}/>
          <Route path='/add' element={<h1> Add Product list</h1>}/>
          <Route path='/update' element={<h1> Update Product list</h1>}/>
          <Route path='/logout' element={<h1>Logout</h1>}/>
          <Route path='/profile' element={<h1>Profile</h1>}/>
          <Route path='/signup'element ={ <SignUp/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
       
      </div>

    </>
  )
}

export default App
