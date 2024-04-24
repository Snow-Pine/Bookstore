import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='nav'>
          <Nav>
              <Link to="/">Home</Link>
              <Link to="/books">Books</Link>
              <Link to="/review">Book review</Link>
          </Nav>
        </div>
    );
}

export default NavBar;