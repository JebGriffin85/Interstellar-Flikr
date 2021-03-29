import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <div>
        <h1>hi</h1>
        <div className='img-container'>
            {/* {photos.photos.forEach((photo => console.log(photo.photoURL)))} */}
            {photos?.photos.map((photo) => <img className='images' key={photo.id} src={`https://${photo.photoURL}`} ></img>)}
        </div>
        </div>
    )
}

export default DiscoveryPage;