const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const user=req.headers.username
    const pass=req.headers.password
    const newuser = await User.create({
        username: user,
        password: pass
    })

  

    res.send('User created')
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const allcources= await Course.find()
    console.log("hi",allcources)
    res.status(200).json(allcources)
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const user=req.headers.username
    const courseid=req.params.courseId

    const newbuy=  await User.findOneAndUpdate(
        {username:user},
        {
            "$push": { purchasedCourses:courseid}
        
        }
    )

    res.status(200).send(`Course ${courseid} purchased`)
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user=req.headers.username
    console.log("hi",user)
    const theuser= await User.findOne(
        {username:user}
    )

    // console.log("hi",theuser)
    res.status(200).send(`Purchased courses ${theuser.purchasedCourses}`)
});

module.exports = router