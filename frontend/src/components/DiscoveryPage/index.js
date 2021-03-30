import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/home';
import { Link } from 'react-router-dom';
import './DiscoveryPage.css';

function DiscoveryPage () {
    const photos = useSelector((state) => state.photo.photo)
    // function handleClick (event, id) {
    //     console.log(event.target, id)
    // onClick = {(event) => handleClick(event, photo.id) this was in the img tag
// }
    // }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])
    return (
        <div>
        <h1>hi</h1>
        <div className='img-container'>
            {/* {photos.photos.forEach((photo => console.log(photo.photoURL)))} */}
            {photos?.photos.map((photo) =>  <Link to={`/photo/${photo.id}`} key={photo.id}>  <img className='images' key={photo.id} src={`https://${photo.photoURL}`} ></img>  </Link>)}
        </div>
        </div>
    )
}

export default DiscoveryPage;