const router = require('express').Router();

const apiSignRoute = require('./api/sign.api.route');
const apiQuestionRoute = require('./api/question.api.router');

router.use('/api/sign', apiSignRoute);
router.use('/api/questions', apiQuestionRoute);
// router.use('*', errRoute)

module.exports = router;
