const express = require ('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

// router.get('/registro', mainController.register);

// router.get('/login', mainController.login);

// router.get('/list', userController.list);
router.get('/detalle', mainController.detalleMenu);

module.exports = router;
