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
    }
});

export default mongoose.model("Text", textSchema);