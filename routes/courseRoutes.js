const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes
router.post('/courses', courseController.createCourses);
router.get('/courses', courseController.getCourses);
router.get('/courses/:id', courseController.getCourseById);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
