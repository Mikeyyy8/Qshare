import mongoose from "mongoose"

// Build MongoDB URI from environment variables with safe encoding for password.
// Expected env vars: MONGO_USER, MONGO_PASS, MONGO_HOST (e.g. cluster0.udc3byy.mongodb.net), MONGO_DB (optional)
const user = process.env.MONGO_USER || 'mike1'
const pass = process.env.MONGO_PASS || 'Mikolo@1'
const host = process.env.MONGO_HOST || 'cluster0.udc3byy.mongodb.net'
const dbName = process.env.MONGO_DB ? `/${process.env.MONGO_DB}` : ''

const encodedPass = encodeURIComponent(pass)
const uri = `mongodb+srv://${user}:${encodedPass}@${host}${dbName}?retryWrites=true&w=majority`

async function connectDB() {
        try {
                await mongoose.connect(uri)
                console.log('DB connected')
        } catch (error) {
                console.error('DB connection error:', error)
                throw error
        }
}

export default connectDB
