import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function BrowseBooks() {
  const { category } = useParams()
  const books = useSelector(state => state.books)
  const [search, setSearch] = useState('')

  const filteredBooks = useMemo(() => {
    const term = search.toLowerCase().trim()
    return books.filter(book => {
      const categoryMatch = !category || book.category.toLowerCase() === category.toLowerCase()
      const searchMatch = !term ||
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      return categoryMatch && searchMatch
    })
  }, [books, category, search])

  return (
    <section>
      <div className="page-title">
        <div>
          <span className="eyebrow">LIBRARY</span>
          <h1>{category ? `${category} Books` : 'Browse Books'}</h1>
          <p>Find a book by category, title, or author.</p>
        </div>
      </div>

      <div className="toolbar">
        <input
          className="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search Books by title or author..."
          aria-label="Search books"
        />
        <Link className="secondary-btn" to="/books">All Books</Link>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="empty">
          <h2>No books found</h2>
          <p>Try another title, author, or category.</p>
        </div>
      ) : (
        <div className="book-grid">
          {filteredBooks.map(book => (
            <article className="book-card" key={book.id}>
              <div className="book-cover">{book.title.charAt(0)}</div>
              <div className="book-info">
                <span className="tag">{book.category}</span>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <div className="rating">★ {book.rating}</div>
                <Link className="details-link" to={`/book/${book.id}`}>View Details →</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}