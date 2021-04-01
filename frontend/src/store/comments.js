import { csrfFetch } from "./csrf"


const GET_COMMENTS = 'home/getComments'




const setComments = (comments) => {
    return {
        type: GET_COMMENTS,
         comments
    }
}
export const addComment = (comment) => async (dispatch) =>{
    const response = await csrfFetch('/api/photos',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comment)
    });
    const newComment = await response.json();
    dispatch(setComments(newComment));

    return newComment;
};



export const getComments = (id) => async (dispatch) => {
    
    const response = await fetch(`/api/photos/${id}`)
    const comments = await response.json()
    dispatch(setComments(comments))
}

const initialState = {comments: null}

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type){
        case GET_COMMENTS:
            newState = Object.assign({}, state);
            newState.comments = action.comments;
            return newState;
       

            default:
                return state;
    }
}

export default commentReducer;