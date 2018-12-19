const express = require('express');
const app = express()
const port = 3000
const path = require('path');



app.set('view engine', 'pug');
app.set('views', path.join(__dirname, "views_pug"));

app.get('/', (req, res) => {
    res.render('homepage');
});

app.listen(port, () => console.log(`Exemple App listining on port ${port}`))