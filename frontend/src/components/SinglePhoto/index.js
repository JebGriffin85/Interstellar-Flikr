import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/home';
import { csrfFetch } from '../../store/csrf';
import './SinglePhoto.css'

function SinglePhoto () {
    const { id } = useParams();
    const photos = useSelector((state) => state.photo.photo)
    const currentPhoto = photos?.photos[id - 1].photoURL
    const currentAlbum = useSelector((state) => state.session.user.Album.id)

    const history = useHistory();
    const goBack = () => {
        history.push('/discovery')
    }

const addToAlbum = async () => {

    const photoId = photos.photos[id - 1].id

    const response = await csrfFetch('/api/myAlbum', {
        method: 'POST',
        body: JSON.stringify({
            photoId,
            currentAlbum
        })
    })
    return response;
}


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div>
            <button  onClick={addToAlbum}>Add to My Album</button>
            <button onClick={goBack}>Go Back</button>
        <img className='single-image' src={`https://${currentPhoto}`}></img>
        
        </div>

    )
}

export default SinglePhoto;