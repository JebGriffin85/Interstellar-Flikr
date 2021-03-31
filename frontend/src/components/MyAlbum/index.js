import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
;import { getAlbum } from '../../store/album';
import { getPhotos } from '../../store/home';

function MyAlbum () {
const { id } = useParams()
const photos = useSelector((state) => state.photo.photo)
const albumPhotos = useSelector((state) => state.album.album)
// let photoIdArray = albumPhotos.map((photoId) => photoId.photoId)

//loop over the array - if album.photoId === photos.photo.id, then render the img tag
const dispatch = useDispatch();


 useEffect(() => {
    dispatch(getPhotos())
 }, [dispatch])

useEffect(() => {
    dispatch(getAlbum(id))
}, [dispatch])


    return (
        <div>Yo its my album
            {console.log('albumPhotos:', albumPhotos, 'photos:',photos)}
        

        </div>
    )
}

export default MyAlbum;