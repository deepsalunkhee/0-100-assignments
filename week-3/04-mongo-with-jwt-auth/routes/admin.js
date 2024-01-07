const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup',async  (req, res) => {
    // Implement admin signup logic
    const admin=req.headers.username
    const pass=req.headers.password
    const newadmin = await Admin.create({
        username: admin,
        password: pass
    })

   
    res.send('Admin created')
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;