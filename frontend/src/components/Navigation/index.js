import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import logo from '../../images/logo.gif'

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const currentAlbum = useSelector((state) => state?.session?.user?.Album?.id)
    const history = useHistory()
    const dispatch = useDispatch();
    const handleClick = () => {
        return dispatch(sessionActions.demoLogin())
    }

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };


    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div className='nav-container'>
            <NavLink className='nav-container' to={`/myAlbum/${currentAlbum}`}>My Album</NavLink>
            {/* <ProfileButton className='nav-container' user={sessionUser} /> */}
            <NavLink className='nav-container' to='/' onClick={logout}>Logout</NavLink>

            </div>
        );
    } else {
        sessionLinks = (
            <span className='nav-container'>
       
                <NavLink className='nav-container' to="/login">Log In</NavLink>
                <NavLink className='nav-container' to="/signup">Sign Up</NavLink>
                <NavLink className='nav-container' to="/" onClick={handleClick}>Demo Login</NavLink>
            </span>
            
        );
    }

    return (
        <span className='nav-container'>
        
            <NavLink className='nav-container' exact to="/">Home</NavLink>
            <NavLink className='nav-container' to="/discovery">Discover</NavLink>
                {isLoaded && sessionLinks}
            
        </span>
    );
}

export default Navigation;