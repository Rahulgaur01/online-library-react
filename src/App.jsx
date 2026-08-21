import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BrowseBooks from './pages/BrowseBooks'
import BookDetails from './pages/BookDetails'
import AddBook from './pages/AddBook'
import NotFound from './pages/NotFound'

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">BookNest</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add-book">Add Book</Link>
      </nav>
    </header>
  )
}

function Layout() {
  const location = useLocation()
  const isNotFound = location.pathname !== '/' &&
    !location.pathname.startsWith('/books') &&
    location.pathname !== '/add-book'

  return (
    <>
      {!isNotFound && <Header />}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isNotFound && <footer>© 2026 BookNest Library • Read. Learn. Explore.</footer>}
    </>
  )
}

export default function App() {
  return <Layout />
}