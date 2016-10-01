/**
 * Created by vgopali on 02-10-2016.
 */

module.exports = function(req,res,next){
    if(!req.user){
        res.redirect('/');
    }else{
        next();
    }
};