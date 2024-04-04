import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(): React.ReactElement {
    return (
    <nav className="left drawer min">
         <Link to='/main'>
            <i>home</i>
            <div>Home</div>
        </Link>
        <Link to='/sign-up'>
            <i>Sign-up</i>
            <div>Sign-up</div>
        </Link>
        <Link to='/sign-in'>
            <i>login</i>
            <div>Sign-in</div>
        </Link>
        <Link to='/questions'>
            <i>Help</i>
            <div>Questions</div>
        </Link>
        <Link to='/logout'>
            <i>Logout</i>
            <div>Logout</div>
        </Link>
        </nav>
    );
}

export default NavBar;