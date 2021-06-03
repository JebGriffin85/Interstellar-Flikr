import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const currentAlbum = useSelector((state) => state.session.user?.Album.id);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
         dispatch(sessionActions.demoLogin())
        
    };

    const logout = () => {
        dispatch(sessionActions.logout());
        history.push('/')
    };


    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <div  className='nav-container'>
            <NavLink className='nav-container' exact to="/">Home</NavLink>
            <NavLink className='nav-container' to="/discovery">Discover</NavLink>
            <NavLink className='nav-container' to={`/myAlbum/${currentAlbum}`}>My Album</NavLink>
            <NavLink className='nav-container' to='/' onClick={logout}>Logout</NavLink>

            </div>
        );
    } else {
        sessionLinks = (
            <span className='nav-container'>
                <NavLink className='nav-container' exact to="/">Home</NavLink>
                <NavLink className='nav-container' to="/discovery">Discover</NavLink>
                <NavLink className='nav-container' to="/login">Log In</NavLink>
                <NavLink className='nav-container' to="/signup">Sign Up</NavLink>
                <div className='nav-container'  onClick={handleClick}>Demo Login</div>
            </span>
            
        );
    }

    return (
        <span className='nav-container'>
        
            
                {isLoaded && sessionLinks}
            
        </span>
    );
}

export default Navigation;