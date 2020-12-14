import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'
const app = express();

//conectar base de datos

db.authenticate()
    .then(()=>console.log('Database connected'))
    .catch(()=>console.log(error))

//Variable
const port = process.env.PORT || 4000

//enable pug
app.set('view engine','pug');

//middleware activar fecha

app.use((req,res,next)=>{
   const year = new Date();
    res.locals.year = year.getFullYear();
    next();
});

//enable public folder
app.use(express.static('public'));

// add router
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server ruuning in the port ${port}`);
})

