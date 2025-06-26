import express from 'express';
import mongoose from 'mongoose'
import dotenv from "dotenv";
import cors from 'cors';
import bookRoute from "./Routes/Book.js";
import userRoute from "./Routes/User.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// connect to mongoDB
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});