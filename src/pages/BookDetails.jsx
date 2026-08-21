import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function BookDetails() {
  const { id } = useParams()
  const book = useSelector(state => state.books.find(item => item.id === id))

  if (!book) {
    return (
      <div className="empty">
        <h1>Book Not Found</h1>
        <p>The selected book does not exist in the library.</p>
        <Link className="primary-btn" to="/books">Back to Browse</Link>
      </div>
    )
  }

  return (
    <section className="details-page">
      <Link className="back-link" to="/books">← Back to Browse</Link>
      <div className="details-layout">
        <div className="large-cover">{book.title.charAt(0)}</div>
        <div>
          <span className="tag">{book.category}</span>
          <h1>{book.title}</h1>
          <h3 className="author">by {book.author}</h3>
          <div className="big-rating">★ {book.rating} / 5</div>
          <h2>About this book</h2>
          <p className="description">{book.description}</p>
          <Link className="primary-btn" to="/books">Browse More Books</Link>
        </div>
      </div>
    </section>
  )
}