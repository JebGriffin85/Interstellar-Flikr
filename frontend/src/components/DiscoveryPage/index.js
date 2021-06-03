import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import { Link } from 'react-router-dom';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo?.photos)
    let sliced = photos?.slice(0, 12)
    

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch]);

    return (
        <div>
        <h4 className='h2'>Click on an image to enlarge or add it to your album</h4>
        <div className='img-container'>

            {sliced?.map((photo) =>  (
            <div className='photo-link'>
            <Link to={`/photos/${photo.id}`} key={photo.id}>  
            <img className='images' key={photo.id} src={`https://${photo.photoURL}` } alt="" >
            </img>  </Link> </div>))}
            
        </div>
        </div>
    )
};

export default DiscoveryPage;