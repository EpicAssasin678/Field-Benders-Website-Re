import mongoose, { Schema } from 'mongoose';

const newsPostSchema = mongoose.Schema({
    title : String,
    information : String,
    date : {
        type: Date,
        default: new Date(),
    },
})

var NewsPost = mongoose.model('NewsPost', newsPostSchema);
export default NewsPost;
