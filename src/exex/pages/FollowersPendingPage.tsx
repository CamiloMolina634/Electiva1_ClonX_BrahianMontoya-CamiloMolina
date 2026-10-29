import { Link } from 'react-router-dom'

export const FollowersPendingPage = () => (
  <main className="container py-4">
    <Link to="/" className="d-inline-block mb-3">← Volver al inicio</Link>
    <h1>Seguidores</h1>
    <p className="text-body-secondary">La lista de seguidores estará disponible próximamente.</p>
  </main>
)
