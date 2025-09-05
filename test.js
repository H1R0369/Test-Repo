import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port, () => {
    console.log("server listening at port", port);
})