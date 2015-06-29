var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

<<<<<<< HEAD
router.get('/author', function(req, res) {
  res.render('author', 
  {
    nombre: 'Leonardo Gil Rodríguez',
  	url_image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/0a2/039/1d2f453.jpg'
  });
});

=======
>>>>>>> 274963a1d4e0007e4191c19a73f145856dc9fb2d
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
