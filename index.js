import express from 'express';
import router from './routes/index.js'

const app = express();

//Variable
const port = process.env.PORT || 4000

//enable pug
app.set('view engine','pug');

app.use()

//enable public folder
app.use(express.static('public'));

// add router
app.use('/',router);

app.listen(port,()=>{
    console.log(`Server ruuning in the port ${port}`);
})

