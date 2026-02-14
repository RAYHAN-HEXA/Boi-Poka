import { createBrowserRouter } from "react-router";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Books from "../Books/Books";




export const  router =  createBrowserRouter(
  [
    {
    path: "/",
    Component : MainLayout,
    
    errorElement :<ErrorPage></ErrorPage>,
    
    children : [
      {
         index: true,
         loader :()=> fetch('/public/data/booksData.json'),
         path :'/',
         Component : Home ,
           
      },
      {
        path : '/books',
        Component : Books,
      
      }
    ]
    },
  ]
)
