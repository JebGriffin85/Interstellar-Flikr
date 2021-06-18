import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import { Link, NavLink } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo?.photos)
    const [currentPage, setCurrentPage] = useState(photos?.slice(0, 12))
    const [pageNum, setPageNum] = useLocalStorage('page', 1)

    const dispatch = useDispatch();
    useEffect(() => {
        if (pageNum === 1) setCurrentPage(photos.slice(0, 12));
        if (pageNum === 2) setCurrentPage(photos.slice(12, 24));
        if (pageNum === 3) setCurrentPage(photos.slice(24, 36));
        if (pageNum === 4) setCurrentPage(photos.slice(48, 57));
        if (pageNum === 5) setCurrentPage(photos.slice(48, 57));
        dispatch(getPhotos()) 
    }, [dispatch]);
    
    return (
        <>
        
        <div className='outer-container'>
        <h4 className='h2'>Click on an image to enlarge or add it to your album</h4>
        <div className='current-page'>
        <span onClick={() => {
            setCurrentPage(photos.slice(0, 12))
            setPageNum(1)
            }}
            >1</span>
        <span onClick={() => {
            setCurrentPage(photos.slice(12, 24))
            setPageNum(2)
        }}
            >2</span>
        <span onClick={() => {
            setCurrentPage(photos.slice(24, 36))
            setPageNum(3)
        }}
            >3</span>
        <span onClick={() => {
            setCurrentPage(photos.slice(36, 48))
            setPageNum(4)
        }}
            >4</span>
        <span onClick={() => {
            setCurrentPage(photos.slice(48, 57))
            setPageNum(5)
        }}
            >5</span>
        </div>
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