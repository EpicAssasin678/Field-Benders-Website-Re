import mongoose, { Schema } from 'mongoose';

const newsPostSchema = new Schema({
    title : String,
    date : {
        type: Date,
        default: new Date(),
    },
    information : String
})

var NewsPost = mongoose.model(newsPostSchema);
export default NewsPost;
