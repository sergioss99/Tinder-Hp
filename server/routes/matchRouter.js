const express = require ('express');
const router = express.Router();
const matchController = require ('../controllers/matchController');

router.get('/match',matchController.getMatch);

module.exports = router;
