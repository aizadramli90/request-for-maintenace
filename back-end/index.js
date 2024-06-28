import express from "express";





const app = express();
const PORT = 3000;

//parsing
app.use(express.json);
app.use(express.urlencoded({extended: true}));

//database init


//routes
app.get("/", (req, res) => {
    res.status(200).json({message: "Hello json"})
});

app.post("/", (req, res) => {
    const body = req.body;
    res.status(200).json(body);
})





/* app.get('/', (req, res) => res.send('Hello World!')) */


app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))