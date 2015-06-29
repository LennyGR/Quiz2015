var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
  res.render('author', 
  {
    nombre: 'Leonardo Gil Rodríguez',
  	url_image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/0a2/039/1d2f453.jpg'
  });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
