import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <>
        <nav>
            <h2>AutoTracker</h2>
            <ul className="navbar">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/retailers">Retailers</Link></li>
                <li><Link to="/payments">Payments</Link></li>
            </ul>
        </nav>
        </>
    );
};

export default Navbar;