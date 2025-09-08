// src/App.jsx
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home   from './components/Home'   // <— cambia esta ruta
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="app">
      <Navbar />
  {/* <Home /> */}
  {/* <RegisterPage /> */}
  <LoginPage />
      <Footer />
    </div>
  )
}

export default App
