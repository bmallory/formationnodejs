const express = require('express');
const app = express()
const port = 3000

app.use(function (req, res, next){
    console.log('Time:', Date.now())
    next();
})

app.get('/', (req,res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Exemple App listining on port ${port}`))

