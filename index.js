const express = require('express');
const app = express();
const port = 8000;
const cookieParser=require('cookie-parser');//

const db=require('./config/mongoose.js');


const expressLayouts=require('express-ejs-layouts');

 //what will happen is that now before rendering any view , server will look for layout.ejs in views and render everything accordingly       
app.use(expressLayouts);//telling express to use express layouts

app.use(express.static('./assets'));//this is to tell express to look for assets for any css/js/image files
//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine','ejs');
app.set('views','./views');
app.use('/', require('./routes'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
