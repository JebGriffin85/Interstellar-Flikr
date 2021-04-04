import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import { Link } from 'react-router-dom';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo)
 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <div>
        <h4 className='h2'>Click on an image to enlarge or add it to your album</h4>
        <div className='img-container'>

            {photos?.photos.map((photo) =>  
            <Link to={`/photos/${photo.id}`} key={photo.id}>  
            <img className='images' key={photo.id} src={`https://${photo.photoURL}` } alt="" >
            </img>  </Link>)}
        </div>
        </div>
    )
}

export default DiscoveryPage;