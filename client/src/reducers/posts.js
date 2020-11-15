import {FETCH_ALL,DELETE,UPDATE,CREATE,LIKE} from '../actions/constants';



const posts = (posts=[], action) => {
    console.log(' ** inside reducer posts is ', posts  );
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE: return [...posts, action.payload];
        
        case UPDATE: //const index = posts.findIndex((post) => post._id === action.payload._id);
            //return posts.splice(index, 0, action.payload);  
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
            
        case DELETE: return posts.filter((post) => post._id !== action.payload);

        case LIKE : return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default: return posts;
    }

}
export default posts;

// const initialState = {
//     posts:[]

// }

// const posts = (state=initialState, action) => {
//     switch (action.type) {
//         case FETCH_ALL: return { ...state, posts: [...state.posts, action.payload] };

//         case CREATE: return { ...state, posts: [...state.posts, action.payload] };

//         case UPDATE: const index = state.posts.findIndexOf((post)=>post._id === action.payload._id)
//             return { ...state, posts: state.posts.splice(index,0,action.payload)  }
        
//         case DELETE : return{...state, posts:posts.filter((post) => post._id !== action.payload)}
        
//         default: return state;
//     }
// }
// export default posts;