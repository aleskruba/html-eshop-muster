import { useState } from 'react'
import './App.css'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Contact from './pages/Contact'
import About from './pages/About'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Account from './pages/Account'
import Orders from './pages/Orders'

function App() {

  return (
    <div className="mainWrapper">
      <Router>
          <Layout>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/product/:id' />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/orders/:id' element={<Orders/>}/>
            </Routes>
        </Layout>
      </Router>


    </div>
  )
}

export default App
