import express from 'express'
import dotenv from 'dotenv';
dotenv.config()// import authRoutes from './routes/auth.Routes.js'
// import userRoutes from './routes/user.Routes.js'
// import matchRoutes from './routes/match.Routes.js'
// import messageRoutes from './routes/message.Routes.js'
import { connectDB } from './config/db.js';



const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())//for accepting req comes from client

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/matches", matchRoutes);
// app.use("/api/messages", messageRoutes);




app.listen(PORT, ()=>{
    console.log(`Server started at the PORT ${PORT}`)
    connectDB();
});