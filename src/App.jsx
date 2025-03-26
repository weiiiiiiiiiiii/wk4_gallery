import Home from './pages/Home'
import './App.css'
import Detail from './pages/BooksDetail'
import { BrowserRouter, Routes, Route } from 'react-router'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="books">
        {/* <Route path="category" element={<Home/>}/> */}
        <Route path="id/:bookid" element={<Detail/>}/>
      </Route>
      <Route path= '/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
