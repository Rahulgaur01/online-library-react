import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBook } from '../store'

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'History', 'Biography']

const initialForm = {
  title: '',
  author: '',
  category: 'Fiction',
  rating: '',
  description: ''
}

export default function AddBook() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const next = {}
    if (!form.title.trim()) next.title = 'Title is required.'
    if (!form.author.trim()) next.author = 'Author is required.'
    if (!form.category) next.category = 'Category is required.'
    if (!form.rating || Number(form.rating) < 1 || Number(form.rating) > 5) {
      next.rating = 'Rating must be between 1 and 5.'
    }
    if (!form.description.trim()) next.description = 'Description is required.'
    return next
  }

  const handleSubmit = e => {
    e.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    dispatch(addBook({
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category,
      rating: Number(form.rating),
      description: form.description.trim()
    }))

    navigate('/books')
  }

  return (
    <section className="form-section">
      <div className="page-title">
        <span className="eyebrow">CONTRIBUTE</span>
        <h1>Add a New Book</h1>
        <p>Expand the library by adding a book to the collection.</p>
      </div>

      <form className="book-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Book Title
            <input name="title" value={form.title} onChange={handleChange} placeholder="Enter book title" />
            {errors.title && <span className="error">{errors.title}</span>}
          </label>

          <label>
            Author
            <input name="author" value={form.author} onChange={handleChange} placeholder="Enter author name" />
            {errors.author && <span className="error">{errors.author}</span>}
          </label>

          <label>
            Category
            <select name="category" value={form.category} onChange={handleChange}>
              {categories.map(item => <option key={item}>{item}</option>)}
            </select>
            {errors.category && <span className="error">{errors.category}</span>}
          </label>

          <label>
            Rating
            <input name="rating" type="number" min="1" max="5" step="0.1" value={form.rating} onChange={handleChange} placeholder="1 - 5" />
            {errors.rating && <span className="error">{errors.rating}</span>}
          </label>

          <label className="full">
            Description
            <textarea name="description" rows="6" value={form.description} onChange={handleChange} placeholder="Write a short description..." />
            {errors.description && <span className="error">{errors.description}</span>}
          </label>
        </div>

        <button className="primary-btn" type="submit">Add Book to Library</button>
      </form>
    </section>
  )
}