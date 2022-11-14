import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    title: String,
    pages: Number
})

var chapterData = mongoose.model('ChapterData', chapterSchema);

export default chapterData;