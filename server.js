
const path=require('path');
const express=require('express');
const cors=require('cors');
const app=express();


app.use(express.json());//parse json requests
app.use(cors());//enable cors
/* This line of code is setting up a middleware in the Express application to serve static files. It
uses the `express.static` middleware function to serve static files located in the 'build'
directory. The `path.join(__dirname, 'build')` function is used to construct the absolute path to
the 'build' directory by joining the current directory (__dirname) with the 'build' directory. This
allows the Express application to serve static files such as HTML, CSS, images, and JavaScript files
from the specified directory when requested by clients. */
app.use(express.static(path.join(__dirname,'build')));//serve static files

app.post('/api/chat0',async(req,res)=>{

});

app.post('/api/general',async (req,res)=>{

})

app.post('/api/image',async (req,res)=>{

})

app.post('/api/receipe',async (req,res)=>{
});

app.listen(300,(err)=>{
    console.log('Server is running on port 3000');
})