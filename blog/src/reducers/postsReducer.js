export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
           return action.payload; //redux sees we are returning a new value
        default: 
            return state;
    }
};