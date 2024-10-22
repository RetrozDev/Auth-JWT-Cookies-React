import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3310;

app.listen(port,() =>{
    console.info(`Server is running on port ${port}`)
})