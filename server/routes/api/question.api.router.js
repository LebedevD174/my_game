const router = require('express').Router();
const { Question, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll();
    const response = { message: 'success', questions };
    res.send(response);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Question.findOne({ where: { id } });
    const response = { message: 'success', question };
    res.send(response);
  } catch ({ message }) {
    res.status(200).json({ error: message });
  }
});

module.exports = router;
