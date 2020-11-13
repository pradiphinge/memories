import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find();
        res.status(200).json({
            success: true,
            count:posts.length,
            data:posts
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            error:'There was error fetching records from db'
        })          
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post)    
    
    try {
        const post = await PostMessage.create(newPost)
        res.status(201).json({
            success: true,
            data:post
        })
    } catch (err) {
        res.status(409).json({
            success: false,
            error:err
        })
    }
}