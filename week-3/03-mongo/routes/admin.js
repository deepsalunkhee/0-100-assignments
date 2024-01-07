const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const admin=req.headers.username
    const pass=req.headers.password
    const newadmin = await Admin.create({
        username: admin,
        password: pass
    })

   
    res.send('Admin created')
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const admin=req.headers.username
    const pass=req.headers.password
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imagelink=req.body.imageLink
    console.log("corse info",title,description,price,imagelink)
    const newcourse = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imagelink
    })
    res.status(200).send(`Course created with ${newcourse._id}`)

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses= await Course.find()
    res.status(200).send(courses)
});

module.exports = router;