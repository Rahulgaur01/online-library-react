import { Link, useLocation } from 'react-router-dom'

export default function NotFound() {
  const location = useLocation()

  return (
    <div className="not-found">
      <div className="not-found-number">404</div>
      <h1>Page Not Found</h1>
      <p>The route <code>{location.pathname}</code> does not exist.</p>
      <Link className="primary-btn" to="/">← Back to Home</Link>
    </div>
  )
}