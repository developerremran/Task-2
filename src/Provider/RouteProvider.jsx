 
import Home from '../Pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../Pages/Error/ErrorPage';
import MainHomeLayout from '../MainLayout/MainHomeLayout';
import Regisiter from '../Pages/Register/Regisiter';

const router = createBrowserRouter([
    {
     path:'/',
     errorElement:<ErrorPage></ErrorPage>,
     element:<MainHomeLayout></MainHomeLayout>,
     children:[
         {
             path:'/',
             element:<Home></Home>
         },
         {
             path:'/register',
             element:<Regisiter></Regisiter>
         }
     ]
    }
])

export default router;