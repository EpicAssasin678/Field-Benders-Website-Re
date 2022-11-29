import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: String,
    password: String

})

//var adminData = mongoose.model('ChapterData', chapterSchema);

export default mongoose.model('Admin', adminSchema);