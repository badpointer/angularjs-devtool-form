const express = require('express');
const app = express();
const path = require('path');

const PORT = 3030;
app.set('port',PORT);

app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
    res.send('Hello World!');
});

app.listen(app.get('port'),function(){
    console.log('Listening on port: ', PORT);
});