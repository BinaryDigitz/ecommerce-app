
function asyncMiddleware(handler){
   return async ((req, res, next)  =>{
    try{
        handler(req, res)
    }
    catch(ex){
        next(ex)
    }
   });
}
export default asyncMiddleware