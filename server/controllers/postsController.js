import mongoose from 'mongoose';
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

export const updatePost = async(req,res) => {
    const { id:_id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    let updatedPost = { creator, title, message, tags, selectedFile, _id};
    updatedPost = await PostMessage.findByIdAndUpdate(_id, updatedPost, { new: true })
    
    console.log('*** insided controller updated Post is ' + updatedPost);
    res.status(200).json({
        success: true,
        data:updatedPost
    })

}

export const deletePost = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    await PostMessage.findByIdAndDelete(_id);
    
    res.status(200).json({
        success: true,
        data:null
    })
}

export const likePost = async (req, res) => {
    
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(_id)
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount: post.likeCount + 1 }, { new: true });
    console.log('***From Controller*** LikePost returned :',updatedPost );
    res.status(200).json({
        success: true,
        data:updatedPost
    })
}