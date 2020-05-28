import jsonPlaceholder from '../apis/jsonPlaceholder';

// action creater to fetch all posts
export const fetchPosts = () => async dispatch => { // dispatch allow us to change any data, getState allows us to get any data from store
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data }); // we only about the data property in this api not the whole object
};

// action creater to fetch one user at a time
export const fetchUser = (id) => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`) //(`/users/${id}`) is 2015 js syntax is same as ('/users/' + id)

        dispatch({ type: 'FETCH_USER', payload: response.data });
};