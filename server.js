const express  = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes/userRoutes')

require("dotenv").config();
require("./database/connect")();

const PORT  = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/', routes)

app.get('/get', (req, res) => {
    res.send('Hello ....')
})


app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`)
});