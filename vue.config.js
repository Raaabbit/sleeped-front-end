const errortip = require('./mock/error.json');
const exactsearch = require('./mock/exactsearch.json');
const rangesearch = require('./mock/rangesearch.json');
const prequery = require('./mock/test.json')

module.exports={
  baseUrl:'./',
  devServer: {
    port:4000,
    before(app){
      app.get('/prequery',(req,res,next)=>{
        res.json(prequery)
      })
      app.post('/exactsearch',(req,res,next)=>{
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
