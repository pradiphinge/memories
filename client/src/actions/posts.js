import * as api from '../api'
import {FETCH_ALL,DELETE,UPDATE,CREATE,LIKE} from './constants'

//action creators 
export const getPosts = () => async (dispatch) => {
    try {
        const  {data:{data}}  = await api.fetchPosts() // database call
        
        dispatch({type:FETCH_ALL,payload:data}) // update the ui
    } catch (error) {
        console.error(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data: { data } } = await api.createPost(post)
        dispatch({type:CREATE, payload:data})
    } catch (error) {
        console.error(error);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data: { data } } = await api.updatePost(id, updatedPost)
        
        dispatch({type:UPDATE, payload:data})
    } catch (error) {
        console.error(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.error(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data: { data } } = await api.likePost(id);
        dispatch({type: LIKE, payload: data})
    } catch (error) {
        console.error(error);
    }
}