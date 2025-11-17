import express from 'express'
import cors from 'cors'
import shareRoutes from './routes/share.route.js'
import connectDB from './db/db.js'

const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("This application is working")
})


app.use("/api/share", shareRoutes)


// Start server after DB connection
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`)
        })
    })
    .catch(err => {
        console.error('Failed to start server due to DB connection error' + err)
        process.exit(1)
    })
