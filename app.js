const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
const router = require('./routes/index');
const cors = require('cors')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload({createParentPath:true}));

app.use('/api',router);
app.use('/',(req,res)=>{
    res.send({
        message : 'Welcome To Unofficial Animlovers V3 Rest Api Key',
        createdBy : '🥃Anas Bex'
    })
})
app.use('/api',(req,res) =>{
    res.send({
        message:'check our github for more info',
        github :'https://github.com/AnasBex/ServerAnimlovers'
    })
})


app.use('*',(req,res) =>{
    res.json({
        'status':'not found path',
        message: 'read the docs here https://github.com/AnasBex/ServerAnimlovers'
    })
})
app.listen(PORT, () => {
  console.log("Listening on PORT:" + PORT);
});
