
import './components/style.css';
import Navbar from './components/navbar';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Outlet />
        {/* <Userinput />   
       <Searchid /> */}
    </>
  );
}

export default App;
