const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    // creating new user 
    await User.create({
        username,
        password
    })
    res.json({
        message: "User Created Successfully"
    })

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // find the user first
    const user = User.findOne({
        username,
        password
    })

    if (user) {
        const token = jwt.sign({ username }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "wrong username and password",
        })
    }

});

router.get('/courses', async (req, res) => {
    const allCourses = await Course.find({});
    
    res.json({
        allCourses
    }) 
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.body.username;
    const courseId = req.params.courseId; 
    const id = Course.find({
        _id : courseId,
    })
   
    // if course id exists in the database then purchase the course(add the course id in the user purchased array)
    if (id) {
         await User.updateOne(
           {
             username,
           },
           {
             $push: {
               purchasedCourses: courseId,
             },
           }
        );
        
        res.json({
            message : "Course purchased successfully"
        })
    } else {
        message : "this course Doesn't exist"
    }
   
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.body.username;

    const user = await User.findOne({
        username
    })
    const userHasCourses = await Course.find({
        _id : user.purchasedCourses
    })
    res.json({
        userHasCourses
    })
});

module.exports = router