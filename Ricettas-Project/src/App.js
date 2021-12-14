//css
import './App.css'

import {BrowserRouter as Router , Route,Routes, Link} from "react-router-dom"


//pages
import Home from './Pages/home/Home';
import Create from './Pages/create/Create';
import Recipie from './Pages/recipie/Recipie';
import Search from './Pages/search/search'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
         <Routes>
        <Route exact path ="/" element={<Home/>}/> 
        <Route exact path ="/Create" element={<Create/>}/> 
        <Route exact path ="/recipie/:id" element={<Recipie/>}/> 
        <Route exact path ="/search" element={<Search/>}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App
