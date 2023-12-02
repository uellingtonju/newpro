import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
   
      <header className="header">
        <span>Link.dev</span>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Sobre</Link>
          <Link to="/">Projetos</Link>
          <Link to="/contatos">Contatos</Link>
          
        </nav>
      </header>
    
  );
}

export default Header;
