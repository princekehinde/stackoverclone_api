const express = require('express');
const QuestionController = require('../controller/question');
const validation = require('../utils/validation/question');
const userValidators = require('../utils/validation/user');

const router = express.Router();

router.post('/askQuestion',
    userValidators.validateUserToken,
    validation.validateAskQue,
    QuestionController.askQue
);

router.get('/',
    QuestionController.getAllQue
);

router.post('/questionUpVote/:id',
    userValidators.validateUserToken,
    validation.validateQue,
    QuestionController.upVoteQue
);

router.post('/questionDownVote/:id',
    userValidators.validateUserToken,
    validation.validateQue,
    QuestionController.downVoteQue
);

router.post('/answer/:id',
    userValidators.validateUserToken,
    QuestionController.answerQuestion
);

module.exports = router;