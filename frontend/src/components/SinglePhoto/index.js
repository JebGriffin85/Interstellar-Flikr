import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getPhotos } from '../../store/home';
import { csrfFetch } from '../../store/csrf';
import './SinglePhoto.css'
import { deleteAlbumPhoto } from '../../store/album';
import { getComments, deleteComment } from '../../store/comments'

import CommentForm from '../CommentForm'

function SinglePhoto () {
    const { id } = useParams();
    const photos = useSelector((state) => state.photo?.photo)
    const currentPhoto = photos?.photos[id - 1]?.photoURL
    const currentAlbum = useSelector((state) => state?.session?.user?.Album?.id)
    const commentsList = useSelector((state) => state?.comments.comments)
    const test = useSelector((state) => state.comments)
    const session = useSelector((state) => state.session.user)
    const [comments, setComments] = useState(commentsList)
    const dispatch = useDispatch();
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }



const addToAlbum = async () => {
    document.getElementById("add-button").style.display="none"
    const photoId = photos?.photos[id - 1]?.id
    const response = await csrfFetch('/api/myAlbum', {
        method: 'POST',
        body: JSON.stringify({
            photoId,
            currentAlbum
        })
    })
    return response;
}

const deletePhoto = () => {
    document.getElementById("delete-button").style.display = "none"
    dispatch(deleteAlbumPhoto(currentAlbum, id))
    history.goBack()
}

useEffect(() => {
    setComments(commentsList)
}, [test])

useEffect(() => {
    setComments(commentsList)
},[commentsList])
  
    
    useEffect(() => {
        dispatch(getComments(id))
        dispatch(getPhotos())
    }, [dispatch])

    if (session !== null){
    return (
        <>
            <button className='go-back' onClick={goBack}>Go Back</button>
        <div className='container'>

            <div className='pic-and-button'>
            <p className='title' >{photos?.photos[id - 1].name}</p>
        <img className='single-image' src={`https://${currentPhoto}`} alt=""></img>
            <div className='button-container'>
            <button id='add-button' onClick={addToAlbum}  >Add to My Album</button>
            <button id='delete-button' onClick={deletePhoto}>Delete from My Album</button>
           </div>
           </div>
            <div className='comment-container'>
                <p className='comments'>Comments</p>
            {comments?.comments?.map((comment) => 
                <p key={comment.id} >{comment.body}
                 {comment.userId === session.id ? 
                 <button className='comment-delete' onClick={() => dispatch(deleteComment(comment.id)) }>delete</button> : null}</p>
            )}
         {/* {console.log(session)} */}
           <CommentForm />
            </div>
        </div>
                    </>
    )
            } else {
                return (
                    <div className='container'>
                        <button className='go-back' onClick={goBack}>Go Back</button>
                        <p className='title' >{photos?.photos[id - 1].name}</p>
                        <img className='single-image' src={`https://${currentPhoto}`} alt=""></img>
                        {/* <button onClick={addToAlbum}>Add to My Album</button>
                        <button onClick={deletePhoto}>Delete from My Album</button> */}
                        <div className='comment-container'>
                        <h4 className='comments'>User Comments</h4>
                        {comments?.comments?.map((comment) =>
                            <p key={comment.id} >{comment.body}</p>
                        )}
                        </div>
                    </div>
                )
            }
}

export default SinglePhoto;