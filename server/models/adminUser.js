import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    privilage_state: {type: String}

});

//var adminData = mongoose.model('ChapterData', chapterSchema);

export default mongoose.model('Admin', adminSchema);