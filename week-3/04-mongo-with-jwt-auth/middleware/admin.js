const jwt=require('jsonwebtoken');
const JWT_SECRET=require('../index');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token_auth=req.headers.authorization;
    const token = token_auth.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    if(decoded.username){
        next();
    }else{
        res.status(401).send('Unauthorized');
    }
}

module.exports = adminMiddleware;