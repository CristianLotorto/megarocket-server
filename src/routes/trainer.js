const express = require('express');
const validateUpdate = require('../validations/trainer');
const trainerController = require('../controllers/trainer');

const router = express.Router();

router
  .put('/:id', validateUpdate, trainerController.updateTrainer)
  .get('/', trainerController.getAllTrainers)
  .get('/:id', trainerController.getTrainerById);

module.exports = router;