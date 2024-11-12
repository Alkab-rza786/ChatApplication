import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'

import userRoute from './routes/user.route.js'

const app = express();
dotenv.config();

app.use(express.json())
// app.use(cors())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


const PORT = process.env.PORT || 3001
const URI = process.env.MONGODB_URI


app.get('/', (req, res) => {
    res.send('Hello alkab');
})

app.use("/user", userRoute)


try {
    mongoose.connect(URI).then(console.log("conneted with database"))
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})