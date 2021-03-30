import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const currentAlbum = useSelector((state) => state?.session?.user?.Album?.id)


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <button onClick={openMenu}>
                <i className="fas fa-space-shuttle" />
                My Profile
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <span>Hi there {user.username}</span>
                    <NavLink to={`/myAlbum/${currentAlbum}`} >See my Album</NavLink>
                    <span>
                        <button onClick={logout}>Log Out</button>
                    </span>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;