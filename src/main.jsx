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
import BookDetails from './components/BookDetails.jsx'
import  {Provider} from "react-redux"
import bookStore from './redux/bookStore.js'
import AddBook from './components/AddBook.jsx'

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
        path :"/browsebook/category/:title",
        element : <BrowseBooks />
      },
      {
        path : "/bookDetails/:id",
        element : <BookDetails />
      },
      {
        path : "/addbook",
        element : <AddBook />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {bookStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
