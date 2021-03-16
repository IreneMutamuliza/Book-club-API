import express from "express";
import router from "./routes/index.js";
const app = express();

const port = 7873;

app.get('/', (req, res)=> {
    res.send("hello world")

})


app.use(express.json());
app.use(router);

app.listen(port, () =>{
    console.log(`our ook clu API is now availale o port ${port}`)
})