import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom/client';
import Searchid from './components/searchid';
import Userinput from './components/searchname';
import { BrowserRouter} from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const appRouter=createBrowserRouter([{
  path:"/",
         element:<App/>,
         children:[
          {
            path:"/",
            element:<Userinput />,
            },
            {
            path:"/searchid",
            element:<Searchid/>,
            },
         ]
        }])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={appRouter} />
    
    <BrowserRouter>
    
    
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

