import mongoose from "mongoose"

const { Schema } = mongoose

const textSchema = new Schema({
    id: {
        type: String,
        required: true
    },

    text: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: new Date(),
        expires: 300
    }
});

export default mongoose.model("Text", textSchema);