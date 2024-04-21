const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config")


// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
    res.json({
        message: "Admin Created Successfully"
    })
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
     const username = req.body.username;
    const password = req.body.password;

    const user = Admin.findOne({
        username
    })
    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "invalid credentials"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

   await Course.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        message: "Course Created Successfully"
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.json({
        courses
    })
});

module.exports = router;

