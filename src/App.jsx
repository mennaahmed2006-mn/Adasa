
import './App.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Article from './Pages/Article'
import Layout from './Componants/Layout';
import BlogDetails from './Pages/BlogDetails';
import NotFound from './Pages/NotFound';

var router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blog', element: <Blog /> },
      { path: '/about', element: <About /> },
      { path: '/article', element: <Article /> },
      {path:'/blog/:slug' , element:<BlogDetails/>},
      { path: '*', element: <NotFound /> }
    ]
  }
]
)


function App() {

  return(
    <>
      <div>

        <RouterProvider router={router} />

      </div>
      
    </>
    
  )

}

export default App
