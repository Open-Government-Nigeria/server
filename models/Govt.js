const mongoose = require("mongoose");const GovtSchema = new mongoose.Schema({    name: String,    posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}],})module.exports = mongoose.model('Govt', GovtSchema);