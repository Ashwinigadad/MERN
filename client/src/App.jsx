import { BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/dashboard'
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import Projects from './pages/Projects'
import Header from './components/Header'




export default function App() {
  return (
    
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/projects' element={<Projects/>}/>
     </Routes>
     
     </BrowserRouter>
      
    
  )
}

