import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => { // dispatch allow us to change any data, getState allows us to get any data from store
        const response = await jsonPlaceholder.get('/posts')

        dispatch({type: 'FETCH_POSTS', payload: response })
};