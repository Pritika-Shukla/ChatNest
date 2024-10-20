import express from 'express';
import dotenv from  "dotenv"
import cookieParser from 'cookie-parser'

import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import userRoutes from "./routes/user.route.js"
import connectToMongoDb from './db/connect.js';
dotenv.config();
const app = express()
const port = process.env.PORT ||5000
app.use(express.json());
app.use(cookieParser());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api/auth" ,authRoutes);
app.use("/api/messages" ,messageRoutes);
app.use("/api/users" ,userRoutes);
app.listen(port, () => {
  connectToMongoDb();
  console.log(`Example app listening on port ${port}`)
})