import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/Sign-Up/SignUp.jsx'
import Login from './components/Login/Login.jsx'
import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'/Sign-Up',
        element: <Login/>
      },
      {
        path:'/Sign-In',
        element:<SignUp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
