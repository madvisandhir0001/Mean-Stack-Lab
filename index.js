const express = require('express');
const app = express();

//set our port
const port = 3000;
app.get('/',(req,res) => res.send('WELCOME TO MEANSTACK,Name:Madvi URN:1805523'));

//setup our app at http//:localhost:3000/path
app.listen(port, () => console.log('Mean stack task 1!'));

