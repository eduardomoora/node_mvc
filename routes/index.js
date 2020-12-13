import express from 'express';
import { render } from 'pug';

const router = express.Router();

router.get('/',(req,res) =>{
  res.render('inicio')
})
router.get('/contacto',(req,res) =>{
    res.send('contacto')
    })

router.get('/testimoniales',(req,res) =>{
      res.send('testimoniales')
      });

router.get('/nosotros',(req,res) => {

//variables 

const viajes = 'viaje a alemania';

// renderer 
res.render('nosotros',{
viajes
});

        })

export default router;        