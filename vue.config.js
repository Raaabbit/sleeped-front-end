const errortip = require('./mock/error.json');
const exactsearch = require('./mock/exactsearch.json');
const rangesearch = require('./mock/rangesearch.json');

module.exports={
  baseUrl:'./',
  devServer: {
    port:4000,
    before(app){
      app.get('/exactsearch',(req,res,next)=>{
        res.json(exactsearch);
      })
      app.get('/rangesearch',(req,res,next)=>{
        res.json(rangesearch);
      })
      app.get('/error',(req,res,next)=>{
        res.json(errortip);
      })
    }
  }
}
