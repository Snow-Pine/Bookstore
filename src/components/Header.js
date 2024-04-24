import { useNavigate } from "react-router-dom";
import { Nav, Container, Row, Col} from "react-bootstrap";
import image from '../images/info_pic_v2.png';

const Header = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };
    const handleLogin = () => {
        navigate('/login');
    };
    const handleCart = () => {
        navigate('/cart');
    };

    return (
        <div className="header">
        <Container>
            <img class="logo" src={image} alt="Brain Feed" height='150px' width='100px'/> {/*The image is generated by AI*/}
            <Row>
                <Col xs md={{ span: 7, offset: 4}}><Nav.Item className="icons" onClick={handleRegister}>Sign up</Nav.Item></Col>
                <Col><Nav.Item className="icons" onClick={handleLogin}>Login</Nav.Item></Col>
            </Row>
            <Row>
            <h1 id="bookstore">Brain Feed Bookstore</h1>
            </Row>
            <Row>
            <Nav.Item className="icons" onClick={handleCart}>
            <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>Cart
            </Nav.Item>
            </Row>
        </Container>
        </div>
    )
}

export default Header;
