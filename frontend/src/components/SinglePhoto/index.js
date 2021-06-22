import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/home';
import { csrfFetch } from '../../store/csrf';
import './SinglePhoto.css'
import { deleteAlbumPhoto } from '../../store/album';
import { getComments, deleteComment } from '../../store/comments'
import { getAlbum } from '../../store/album';

import CommentForm from '../CommentForm'

function SinglePhoto() {
    const { id } = useParams();
    const photos = useSelector((state) => state.photo?.photo)
    const currentPhoto = photos?.photos[id - 1]?.photoURL
    const currentAlbum = useSelector((state) => state.session.user?.Album?.id)
    const commentsList = useSelector((state) => state?.comments?.comments)
    const albumPhotos = useSelector((state) => state?.album.album?.Photos)
    const session = useSelector((state) => state.session.user)
    const userId = useSelector((state) => state.session.user?.id)
    const [comments, setComments] = useState(commentsList)
    const dispatch = useDispatch();
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }

    let allPhotoIdsInAlbum = albumPhotos?.map((photo) => photo.id)

    const addToAlbum = async () => {
        document.getElementById("add-button").style.display = "none"
        const photoId = photos?.photos[id - 1]?.id
        const response = await csrfFetch('/api/myAlbum', {
            method: 'POST',
            body: JSON.stringify({
                photoId,
                currentAlbum
            })
        })
        return dispatch(getAlbum(userId))
    }

    const deletePhoto = () => {
        document.getElementById("delete-button").style.display = "none"
        dispatch(deleteAlbumPhoto(currentAlbum, id))
        return dispatch(getAlbum(userId))
    }

    useEffect(() => {
        if (session) dispatch(getAlbum(userId))
    }, [dispatch])

    useEffect(() => {
        setComments(commentsList)
    }, [commentsList])


    useEffect(() => {
        dispatch(getComments(id))
        dispatch(getPhotos())
    }, [dispatch])

    async function deleteComm (commentId) {
        await dispatch(deleteComment(commentId))
        dispatch(getComments(id))
    }

    if (session !== null) {
        return (
            <>
                <button className='go-back' onClick={goBack}>Go Back</button>
                <div className='container'>

                    <div className='pic-and-button'>
                        <p className='title' >{photos?.photos[id - 1].name}</p>
                        <img className='single-image' src={`https://${currentPhoto}`} alt=""></img>
                        <div className='button-container'>
                            {allPhotoIdsInAlbum?.includes(Number(id)) ? null : <button id='add-button' onClick={addToAlbum}>Add to My Album</button>}
                            {allPhotoIdsInAlbum?.includes(Number(id)) ? <button id='delete-button' onClick={deletePhoto}>Delete from My Album</button> : null }
                            
                        </div>
                    </div>
                    <div className='comment-container'>
                        <p className='comments'>Comments</p>
                        {comments?.comments?.map((comment) =>
                            <p className='comment-body' key={comment.id} >{comment.body}
                                {comment.userId === session.id ?
                                    <button className='comment-delete' onClick={() => deleteComm(comment.id)}>delete</button> : null}</p>
                        )}
                        <CommentForm />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <button className='go-back' onClick={goBack}>Go Back</button>
            <div className='container'>
              <div>
                <p className='title' >{photos?.photos[id - 1].name}</p>
    
                <img className='single-image' src={`https://${currentPhoto}`} alt=""></img>
                    </div>
                <div className='comment-container'>
                    <h4 className='comments'>User Comments</h4>
                    {comments?.comments?.map((comment) =>
                        <p key={comment.id} >{comment.body}</p>
                    )}
                </div>
            </div>
            </>
        )
    }
}

export default SinglePhoto;