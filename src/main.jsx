import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Coffee from './Components/Coffee.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './Components/AuthProvider.jsx';
import Users from './Components/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[

      {
         path:'/',
         element:<Coffee></Coffee>,
         loader:()=>fetch('http://localhost:3000/coffee')
      },

      {
        path:'/addCoffee',
        element:<AddCoffee></AddCoffee>
    
      },
      {
        path:'/updateCoffee',
        element:<UpdateCoffee></UpdateCoffee>
      },
      {
        path:'/coffee',
        element:<Coffee></Coffee>,
        loader:()=>fetch('http://localhost:3000/coffee')
      },
      {
        path:'/coffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader:({params})=>fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    

    ]
  },

  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
 
  {
    path:'/signin',
    element:<SignIn></SignIn>
  }
  ,
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=>fetch('http://localhost:3000/users')

  }
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
