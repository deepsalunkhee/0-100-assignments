const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user =req.headers.username
    const password =req.headers.password

    const respose = await User.findOne({
        username: user,
        password: password
    })

    if (respose){
        next()
    }
    else{
        res.status(403).send('User does not exist')
    }
}

module.exports = userMiddleware;