import { formatCLP } from '../utils/format'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar__brand">Pizzería Mamma Mia!</div>
      <div className="custom-navbar__links">
        <button className="custom-navbar__btn">Home</button>
        <button className="custom-navbar__btn">Login</button>
        <button className="custom-navbar__btn">Register</button>
      </div>
      <div className="custom-navbar__total">
        <span className="custom-navbar__cart">🛒</span>
        <span>Total: ${formatCLP(total)}</span>
      </div>
    </nav>
  )
}

export default Navbar

