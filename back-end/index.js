//import all the required modules
import express from "express";
import healthController from "./controller/health.js";
import { testConnection } from "./database/connection.js";





//declare the express app and port
const app = express();
const PORT = 8686;

//parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//database connection test
testConnection();

//database init


//routes
app.get("/", healthController.get);
app.post("/", healthController.post);





/* app.get('/', (req, res) => res.send('Hello World!')) */


app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))