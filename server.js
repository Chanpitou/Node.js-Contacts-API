const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

// connect to the database
connectDb();

// initialize express server on port
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
