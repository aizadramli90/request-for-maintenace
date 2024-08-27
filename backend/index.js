//import all the required modules
import "dotenv/config.js";
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
import { uploadImage } from "./controller/upload.js";
import upload from "./middleware/multerUpload.js";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";




// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//declare the express app and port
const app = express();
const PORT = 8686;




//parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//serve static files from the ../frontend/public folder
app.use(express.static(path.join(__dirname, '../frontend/public')));


//database connection and initialization
databaseInit();

// cors
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));



//routes
app.get("/", healthController.get);
app.post("/", healthController.post);
app.get("/admin/users", isAuth, readAllUsers);
app.get("/users/:id", readUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser)

app.post("/register", createUser);
app.post("/login", createToken)

//route to handle requests
app.post("/requests", isAuth, createRequest);
app.get("/requests", isAuth, listAllRequestForSpecificId);

//upload image
app.post("/upload", isAuth, upload.single('image'), uploadImage);

//route to handle 404 and show page 404.html
app.use((req, res) => {
    /* res.status(404).json({message: "Route not found"}); */
    res.status(404).sendFile(path.join(__dirname, '../frontend/public', '404.html'));
    
})


/* app.get('/', (req, res) => res.send('Hello World!')) */


app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))