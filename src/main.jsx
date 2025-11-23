import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BrowseBooks from './components/BrowseBooks.jsx'
import Home from './components/Home.jsx'
import BookCategories from './components/BookCategories.jsx'
import PopularBook from './components/PopularBook.jsx'
import Footer from './components/Footer.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children : [
      {
        path : "/",
        element : (
          <>
            <Home />
            <BookCategories itemPreview={3} />
            <PopularBook />
            <Footer />
          </>
        )
      },
      {
        path : "/browsebook",
        element : <BrowseBooks />
      },
      {
        path :"/browserbook/:title",
        element : <BrowseBooks />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
