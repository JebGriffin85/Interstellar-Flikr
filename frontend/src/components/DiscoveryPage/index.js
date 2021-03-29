import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPhotos } from '../../store/home';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <div>
        <h1>hi</h1>
        <div>
            {/* {photos.photos.forEach((photo => console.log(photo.photoURL)))} */}
            {photos?.photos.map((photo) => <img key={photo.id} src={`https://${photo.photoURL}`} ></img>)}
        </div>
        </div>
    )
}

export default DiscoveryPage;