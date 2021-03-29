import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();
    const handleClick = () => {
        return dispatch(sessionActions.demoLogin())
    }

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div>
            {/* <NavLink to="/albums/:id" >Hey</NavLink> */}
            <ProfileButton className='nav-container' user={sessionUser} />
            </div>
        );
    } else {
        sessionLinks = (
            <div className='nav-container'>
                <NavLink className='nav-container' to="/login">Log In</NavLink>
                <NavLink className='nav-container' to="/signup">Sign Up</NavLink>
                <NavLink className='nav-container' to="/" onClick={handleClick}>Demo Login</NavLink>
            </div>
            
        );
    }

    return (
        <ul>
            
            <NavLink className='nav-container' exact to="/">Home</NavLink>
            <NavLink className='nav-container' to="/discovery">Discover</NavLink>
                {isLoaded && sessionLinks}
            
        </ul>
    );
}

export default Navigation;