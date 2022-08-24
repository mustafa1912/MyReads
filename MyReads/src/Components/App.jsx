import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import '../style/fontawesome-free-6.0.0-web/css/all.css';
import '../style/bootstrap.css';
import '../style/App.css';


import Home from './Home/Home';
import Reading from './books reading/Reading';
import Read from './books read/Read';
import WantToRead from './books want to read/WantToRead';
import Navbar from './NavBar/Navbar';
import Search from './search/Search';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='books/wantToRead' element={<WantToRead />}></Route>
        <Route path='books/reading' element={<Reading />}></Route>
        <Route path='books/read' element={<Read />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      <button type='button' className='btn bt-search btn-primary fw-bolder text-light'><NavLink to='/search'><i className="fa-solid fa-magnifying-glass"></i></NavLink></button>
    </div>
  );
}

export default App;
