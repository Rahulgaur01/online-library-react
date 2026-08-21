import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'History', 'Biography']

export default function Home() {
  const books = useSelector(state => state.books)
  const popular = books.slice(0, 4)

  return (
    <div>
      <section className="hero">
        <div>
          <span className="eyebrow">YOUR DIGITAL LIBRARY</span>
          <h1>Discover your next great read.</h1>
          <p>Explore a growing collection of books across fiction, science, history, fantasy, and more.</p>
          <Link className="primary-btn" to="/books">Browse Books</Link>
        </div>
        <div className="hero-card">📚<span>Read more.<br />Discover more.</span></div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>Book Categories</h2>
          </div>
        </div>
        <div className="category-grid">
          {categories.map(category => (
            <Link className="category-card" key={category} to={`/books/${encodeURIComponent(category)}`}>
              <span>{category === 'Sci-Fi' ? '🚀' : category === 'Fantasy' ? '🧙' : category === 'History' ? '🏛️' : category === 'Biography' ? '👤' : '📖'}</span>
              <strong>{category}</strong>
              <small>Explore collection →</small>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="section-heading">
          <div>
            <span className="eyebrow">CURATED FOR YOU</span>
            <h2>Popular Books</h2>
          </div>
          <Link to="/books">View all →</Link>
        </div>
        <div className="book-grid">
          {popular.map(book => (
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
      </section>
    </div>
  )
}