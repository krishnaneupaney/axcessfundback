import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    creator: String,
    name: String,
    number: String,
    amount: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    // applyNow: {
    //     type: Number,
    //     default: 0
    // },
    createdAt: {
        type: Date,
        default: new Date(),
    },

});

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;