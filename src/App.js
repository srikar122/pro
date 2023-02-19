import './App.css';
import {Link,Route,Routes} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from './components/login.js'
import SignUp from './components/SignUp.js'
import Home from './components/Home.js'

function App() {
  let burger=()=>{
    let navBar=document.querySelector(".nav-bar")
    navBar.classList.toggle("srikar")
  }
//   let hamburger=document.querySelector(".hamburger")
// hamburger.addEventListener("click",()=>{
//     let navBar=document.querySelector(".nav-bar")
//     navBar.classList.toggle("srikar")
// })
  return (
    <div>
       <header>
        <div className="logo">Pro</div>
        <div className="hamburger" onClick={burger}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="home" className="active">Home</Link>
                </li>
                <li>
                    <Link to="login" >Login</Link>
                </li>
                <li>
                    <Link to="signup">SignUp</Link>
                </li>
            </ul>
        </nav>
    </header>
    <Routes>
    <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>

    </div>
  );
}

export default App;
