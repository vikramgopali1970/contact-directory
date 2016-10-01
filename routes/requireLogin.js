/**
 * Created by vgopali on 02-10-2016.
 */

module.exports = function(req,res,next){
    console.log("check this string"+req.session.user);
    if(!req.session.user){
        res.redirect('/');
    }else{
        next();
    }
};