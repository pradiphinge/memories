import * as api from '../api'
import * as constants from '../actions/constants'

//action creators 
export const getPosts = () => async (dispatch) => {
    try {
        const  {data:{data}}  = await api.fetchPosts() // database call
        console.log('inside action creator:' +data )
        dispatch({type:constants.FETCH_ALL,payload:data}) // update the ui
    } catch (error) {
        console.error(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data: { data } } = await api.createPost(post)
        dispatch({type:constants.CREATE, payload:data})
    } catch (error) {
        console.error(error);
    }
}
