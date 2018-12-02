const mockdata = require('./mock/test.json');

module.exports={
  devServer: {
    port:4000,
    before(app){
      app.get('/hotals/list',(req,res,next)=>{
        res.json(mockdata);
      })
    }
  }
}
