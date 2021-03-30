import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
;import { getAlbum } from '../../store/album';

function MyAlbum () {
const { id } = useParams()


const dispatch = useDispatch();

useEffect(() => {
    dispatch(getAlbum(id))
}, [dispatch])


    return (
        <div>Yo its my album</div>
    )
}

export default MyAlbum;