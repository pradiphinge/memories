import * as constants from '../actions/constants';

const posts = (posts = [], action) => {
    
    switch (action.type) {
        case constants.FETCH_ALL:
            return action.payload;
        case constants.CREATE: return [...posts,action.payload];
        case constants.UPDATE: return posts;
        case constants.DELETE: return posts;
        default: return posts;
    }

}
export default posts;