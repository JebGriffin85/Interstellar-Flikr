

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

const [comment, setComment] = useState('')


const submitComment = (event) => {
  event.preventDefault();

  const payload = {

      comment,
      photoId,
      userId
  }
//   console.log(payload)
  dispatch(addComment(payload))
}



return (


    <form onSubmit={submitComment}>
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