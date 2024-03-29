import express from "express";
import bookRoute from "./routes/bookRoute.js"
import connectDB from "./conifg/db.js";

const app = express();
const port = 3000;

app.use("/api/v1/books", bookRoute);

try {
    await connectDB();
    
    app.listen(port, () => {
        console.log(`Server is listening port: ${port}`);
    });


} catch (error) {
    process.exit(1);
}

