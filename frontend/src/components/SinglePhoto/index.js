import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/home';
import './SinglePhoto.css'

function SinglePhoto () {
    const { id } = useParams();
    const photos = useSelector((state) => state.photo.photo)
    const currentPhoto = photos?.photos[id - 1].photoURL

    const history = useHistory();
    const goBack = () => {
        history.push('/discovery')
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    return (
        <div>
            <button>Add to My Album</button>
            <button onClick={goBack}>Go Back</button>
        <img className='single-image' src={`https://${currentPhoto}`}></img>
        
        </div>

    )
}

export default SinglePhoto;