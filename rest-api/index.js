const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//set up express app
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use(function(err, req, res, next){
   res.status(422).send({error:err.message});
   console.log(res);
});

app.listen(process.env.port || 4000, function () {
    console.log('listenig at port 4000');
})