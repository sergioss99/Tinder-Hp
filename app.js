const express = require ('express');
const app = express();

const router = require ('./server/routes/router');

app.use(express.json());

app.use('/api', router);


app.listen(3000, ()=>{
    console.log('running on port 3000')
})