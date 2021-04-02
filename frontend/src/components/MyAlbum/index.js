import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
;import { getAlbum } from '../../store/album';
// import { getPhotos } from '../../store/home';

function MyAlbum () {
const { id } = useParams()
// const photos = useSelector((state) => state.photo.photo)
const albumPhotos = useSelector((state) => state?.album?.album?.Photos)
const user = useSelector((state) => state.session.user.username)
const dispatch = useDispatch();




useEffect(() => {

    dispatch(getAlbum(id))
}, [dispatch])


    return (
        <>
        <p className='h2'>
                Welcome {user} to your album
        </p>
        <div className='img-container'>
            {albumPhotos?.map((photo) =>
                
             <Link to={`/photos/${photo.id}`} key={photo.id}>
             <img className='images' key={photo.id} src={`https://${photo.photoURL}`} alt="" >
              
                 </img> </Link>  )}

        </div>
        </>
    )
}

export default MyAlbum;