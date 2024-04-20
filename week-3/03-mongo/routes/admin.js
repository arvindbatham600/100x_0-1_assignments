const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

   await Admin.create({
        username,
        password
   })
    res.json({
        msg: "Admin created Successfully",
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // getting the course details from body
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });

    res.json({
        message: 'Course Created',
        courseId : newCourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courses = await Course.find({})
    res.json({
        courses,
    })
});

module.exports = router;