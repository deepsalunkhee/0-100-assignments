const { Admin } = require("../db");

// Middleware for handling auth
 async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const admin =req.headers.username
    const password =req.headers.password

    const respose = await Admin.findOne({
        username: admin,
        password: password
    })

    if (respose){
        next()
    }
    else{
        res.status(403).send('User does not exist')
    }



}

module.exports = adminMiddleware;