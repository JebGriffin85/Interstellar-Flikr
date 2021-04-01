

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addComment } from '../../store/comments';


function CommentForm () {
const { id } = useParams();
const photos = useSelector((state) => state.photo.photo)
const photoId = photos?.photos[id - 1].id
const userId = useSelector((state) => state?.session?.user?.id)
const dispatch = useDispatch()

let [comment, setComment] = useState('')
const reset = () => {
    setComment('')
}

const submitComment = (event) => {
  event.preventDefault();
  event.target.reset()
  const payload = {

      comment,
      photoId,
      userId
      
    }
    
    
  reset()
  dispatch(addComment(payload))
 
}



return (


    <form onSubmit={submitComment} id="form">
        <label>Add a Comment
        <input
        onChange={event => setComment(event.target.value)}
        type="text"
        name="comment"
        value={comment}
     
        >
        
        </input>

        </label>
        

        <button type="submit"  >Comment</button>
    </form>
)

}

export default CommentForm;