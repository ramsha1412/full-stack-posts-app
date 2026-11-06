require("dotenv").config();
const app = require("../backend/src/app");
const connectDB = require("../backend/src/db/db");

// Initialize Database connection
connectDB();

if (process.env.NODE_ENV !== 'production') {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}

module.exports = app;
