import { formatCLP } from '../utils/format'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Pizzería Mamma Mia!</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          {/* Izquierda: Home / Login / Register */}
          <div className="navbar-nav gap-2">
            <button className="btn btn-outline-light btn-sm">Home</button>
            {token ? (
              <>
                <button className="btn btn-outline-light btn-sm">Profile</button>
                <button className="btn btn-outline-light btn-sm">Logout</button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light btn-sm">Login</button>
                <button className="btn btn-outline-light btn-sm">Register</button>
              </>
            )}
          </div>

          {/* Derecha: Total */}
          <div className="ms-auto">
            <button className="btn btn-outline-light">
              🛒 Total: ${formatCLP(total)}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

