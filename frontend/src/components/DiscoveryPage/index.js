import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import { Link, NavLink } from 'react-router-dom';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo?.photos)
    const [currentPage, setCurrentPage] = useState(photos?.slice(0, 12))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch]);
    
    return (
        <>                  
        
        <div className='outer-container'>
        <h4 className='h2'>Click on an image to enlarge or add it to your album</h4>

        <span onClick={() => setCurrentPage(photos.slice(0, 12))}>1</span>
        <span onClick={() => setCurrentPage(photos.slice(12, 24))}>2</span>
        <span onClick={() => setCurrentPage(photos.slice(24, 36))}>3</span>
        <span onClick={() => setCurrentPage(photos.slice(36, 48))}>4</span>
        <span onClick={() => setCurrentPage(photos.slice(48, 57))}>5</span>

        <div className='img-container'>

            {currentPage?.map((photo) =>  (
            <div className='photo-link'>
            <Link to={`/photos/${photo.id}`} key={photo.id}>  
            <img className='images' key={photo.id} src={`https://${photo.photoURL}` } alt="" >
            </img>  </Link> </div>))}
            
        </div>
        </div>
    </>
    )
};

export default DiscoveryPage;