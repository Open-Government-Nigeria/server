const mongoose = require("mongoose");const PostSchema = new mongoose.Schema({    content: String,    images: [{        type: String,    }],    videos: [{        type: String,    }],    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],    likes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}],    category: {        type: String, enum: ["local", "state", "federal"], required: true    },    tags: [{        type: String,        enum: ["Security", "Infrastructure", "Education", "Healthcare", "Transportation", "Finance", "Energy", "Environment", "Justice", "Agriculture", "Housing", "Social Services", "Foreign Affairs", "Labor", "Technology", "Culture", "Tourism", "Urban Development", "Emergency Management", "Science", "Trade", "Telecommunications", "Water Resources", "Human Rights"],        required: true    }],});module.exports = mongoose.model('Post', PostSchema);