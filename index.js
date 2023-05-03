const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsData = require('./data/chefsData.json')

// app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef server is running')
});

// app.get('/chefs', (req, res) => {
//     res.send(chefsData);
// })

// app.get('/chefs/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const selectedChef = chefsData.find(chef => chef.id === id);
//     res.send(selectedChef);
// })

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
