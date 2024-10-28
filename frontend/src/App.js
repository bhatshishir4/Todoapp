
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Todo from './Todolist'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/todo' element={<Todo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;