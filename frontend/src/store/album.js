import { csrfFetch } from './csrf';

const GET_ALBUM = 'myAlbum/getAlbum'


const setAlbum = (photos) => {
    return {
        type: GET_ALBUM,
        payload: photos
    };
};



export const getAlbum = (id) => async (dispatch) => {
    const response = await fetch(`/api/myAlbum/${id}`,
    )
    const album = await response.json()
    dispatch(setAlbum(album))
}

export const deleteAlbumPhoto = (albumId, photoId) => async (dispatch) => {
    await csrfFetch(`/api/myAlbum/${albumId}/photo/${photoId}`, {
        method: 'DELETE'
    })
    dispatch(getAlbum(albumId))
    return 
}



const initialState = { album: null }

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALBUM:
            newState = Object.assign({}, state);
            newState.album = action.payload;
            return newState;
        default:
            return state;
    }
}

export default albumReducer;