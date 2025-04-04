import { BrowserRouter, Routes, Route } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'

import './App.css';
import Home from './pages/Home'
import Detail from './pages/BooksDetail';
import Category from './pages/Category';


function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books">
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="id/:bookid" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
