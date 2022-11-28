import mongoose from "mongoose";

const chapterSchema = mongoose.Schema({
    title: String,
    content: Map

})

var chapterData = mongoose.model('ChapterData', chapterSchema);

export default chapterData;