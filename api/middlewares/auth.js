const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const tokenDecoded = jwt.verify(token, "ANDAO_ATAKALO_E");
        const user_id = tokenDecoded.userId;
        req.auth = {
            userId: user_id
        }
        next();
    } catch(error){
       res.status(400).json({error: "Authorization failed"});
    }
}
module.exports = auth;



