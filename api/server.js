import express from 'express'
import { configDotenv } from 'dotenv';
import authRoutes from './routes/auth.Routes.js'
import userRoutes from './routes/user.Routes.js'
import matchRoutes from './routes/match.Routes.js'
import messageRoutes from './routes/message.Routes.js'


const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())//for accepting req comes from client

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/messages", messageRoutes);




app.listen(PORT, console.log("listinig on port 500"));