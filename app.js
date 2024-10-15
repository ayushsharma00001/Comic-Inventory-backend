import express from 'express';
import cors from 'cors';
import comicRoutes from './routes/comicRoutes.js';
import dotenv from 'dotenv';
import ExpressError from"./utils/ExpressError.js";       // requiring ExpressError class to show our custom errors
import connectDB from './utils/mongoDb.js';

dotenv.config({});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// Routes
app.use('/api', comicRoutes);





//for all other routes that don't exists...
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found"));
})

// Error handling middleware
app.use((err,req,res,next)=>{
    let {statusCode = 500,message = "Something went Wrong"} =err;
    res.status(statusCode).json({success:false,message:message});
});

const port = process.env.PORT || 3000;

// listening on some port...
app.listen(port,()=>{
    connectDB();
    console.log("LIstening app...");
});


export default app;
