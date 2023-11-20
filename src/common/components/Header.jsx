import { Link } from "react-router-dom";

const Header = () => (
    <header style={{height: '70px'}}>
        <nav style={{display: 'flex', gap: '10px'}}>
            <Link to="/">Home</Link>
            <Link to="empty">Empty</Link>
        </nav>
    </header>
)
export default Header;