import express from 'express';
import { render } from 'pug';

const router = express.Router();

router.get('/',(req,res) =>{
  res.render('inicio',{
    titulo:'Inicio'
  });
});

router.get('/testimoniales',(req,res) =>{
      const titulo ="Testimoniales"
      res.render('testimoniales',{
        titulo
      });
      });
      
router.get('/viajes',(req,res) =>{
  const titulo = 'Viajes'
        res.render('viajes',{
          titulo
        });
        });      

router.get('/nosotros',(req,res) => {
const titulo = 'Nosotros';
// renderer 
res.render('nosotros',{
titulo
});
})

export default router;        