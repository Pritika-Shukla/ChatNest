import express from 'express';
import dotenv from  "dotenv"
import authRoutes from "./routes/auth.route.js"
import connectToMongoDb from './db/connect.js';
const app = express()
const port = process.env.PORT ||5000
dotenv.config();
app.use(express.json());
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api/auth" ,authRoutes)
app.listen(port, () => {
  connectToMongoDb();
  console.log(`Example app listening on port ${port}`)
})