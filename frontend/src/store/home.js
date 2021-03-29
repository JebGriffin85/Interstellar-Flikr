

const GET_PHOTOS = 'home/getPhotos'

const setHome= (photos) => {
    return {
        type: GET_PHOTOS,
        payload: photos
    };
};

export const getPhotos = () => async (dispatch) => {

    const response = await fetch('/api/photos')
    const photos = await response.json()
    dispatch(setHome(photos))

}

const initialState = {photo: null}

const photoReducer = (state = initialState, action) => {
    let newState;
 switch (action.type) {
     case GET_PHOTOS: 
        newState = Object.assign({}, state);
        newState.photo = action.payload;
        return newState;
        
     default:
         return state;
 }
}

export default photoReducer;