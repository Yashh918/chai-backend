import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// routes import
import userRouter from "./routes/user.routes.js"
import videoRouter from "./routes/video.routes.js"
import tweetRouter from "./routes/tweet.routes.js"
import commentRouter from "./routes/comment.routes.js"
import playlistRouter from "./routes/playlist.routes.js"
import likeRouter from "./routes/like.routes.js"

// routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/videos", videoRouter)
app.use("/api/v1/tweets", tweetRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/playlists", playlistRouter)
app.use("/api/v1/likes", likeRouter)

// http://localhost:8000/api/v1/users/register

// TODO: I have added username field in models and controllers of video, tweet, comment, and like to read data better in mongodb while testing. I need to remove that after the project is complete as userId is already present 

export { app }