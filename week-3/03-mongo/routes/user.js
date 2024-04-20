const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // create new user ==>>>>>
    await User.create({
        username,
        password
    })
    res.json({
        message: "User created successfully",
    })

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const courseId = req.params.courseId;
    
    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses : courseId
        }
    })
    res.json({
        msg: "purchase completed"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;

    // find the user first ==>

    const user = await User.findOne({
        username
    })
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json({
        courses,
    })

});

module.exports = router