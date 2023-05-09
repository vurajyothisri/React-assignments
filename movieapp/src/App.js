import './App.css'
import './components/style.css';
import Navbar from './components/navbar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <h1 className='heading'>Movie Search App</h1>
    <Navbar />
    <Outlet />
        {/* <Userinput />   
       <Searchid /> */}
    </>
  );
}

export default App;
