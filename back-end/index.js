//import all the required modules
import express from "express";
import healthController from "./controller/health.js";
import { databaseInit } from "./database/connection.js";
import createUser from "./controller/user.controller/create.js";
import { readAllUsers, readUserById } from "./controller/user.controller/read.js";
import updateUser from "./controller/user.controller/update.js";
import deleteUser from "./controller/user.controller/delete.js";
import createRequest from "./controller/request.controller/create.js";
import listAllRequestForSpecificId from "./controller/request.controller/read.js";
import createToken from "./controller/auth.js";
import isAuth from "./middleware/isAuth.js";





//declare the express app and port
const app = express();
const PORT = 8686;

//parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));



//database connection and initialization
databaseInit();



//routes
app.get("/", healthController.get);
app.post("/", healthController.post);
app.get("/users", readAllUsers);
app.get("/users/:id", readUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser)

app.post("/register", createUser);
app.post("/login", createToken)

//route to handle requests
app.post("/requests", createRequest);
app.get("/requests", isAuth, listAllRequestForSpecificId);


//route to handle 404
app.use((req, res) => {
    res.status(404).json({message: "Route not found"})
})


/* app.get('/', (req, res) => res.send('Hello World!')) */


app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))