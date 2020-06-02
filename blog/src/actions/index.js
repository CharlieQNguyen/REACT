import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts());

        const userIds = _.uniq(_.map(getState().posts, 'userId')) // getting all the posts in an array with unique userId
        userIds.forEach(id => dispatch(fetchUser(id))) //for each id we are going to call the fetchuser and dispatch 

        // ._chain(getState().posts)
        //         .map('userId')
        //         .uniq()
        //         .forEach(id => dispatch(fetchUser(id)))
        //         .value()
}

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

// const _fetchUser = _.memoize(async (id, dispatch) => { //memoize version 
//   // memoize to call it one time to use in fetchUser function
//   const response = await jsonPlaceholder.get(`/users/${id}`); //(`/users/${id}`) is 2015 js syntax is same as ('/users/' + id)

//   dispatch({ type: "FETCH_USER", payload: response.data });
// });