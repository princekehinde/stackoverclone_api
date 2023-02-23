const QuestionManager = require("../utils/service/question");
// const model = require('../model')
const { 
  successResponse, 
  errorResponse 
} = require('../utils/helper/response');

class QuestionController {
  static async askQue(req, res) {
    try {
      const result = await QuestionManager.askQue(req.body);

      if (result.statusCode === 400)
      return errorResponse(res, result.statusCode, result.message);

    return successResponse(
      res,
      result.statusCode,
      result.message,
      result.data
    );
  } catch (error) {
    return errorResponse(res, 500, error.message, console.log(error));
  }
}

  static async getAllQue(req, res) {
    try {
      const result = await QuestionManager.allQue(req.body);

      if (result.statusCode === 400)
      return errorResponse(res, result.statusCode, result.message);

    return successResponse(
      res,
      result.statusCode,
      result.message,
      result.data
    );
    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

  static async upVoteQue(req, res) {
    try {
      const result = await QuestionManager.upVoteQue(req.body);

      if (result.statusCode === 400)
      return errorResponse(res, result.statusCode, result.message);

    return successResponse(
      res,
      result.statusCode,
      result.message,
      result.data
    );
    } catch (error) {
      return errorResponse(res, 500, error.message, console.log(error));
    }
  }

 static async downVoteQue(req, res) {
    try {
      const result = await QuestionManager.downVoteQue(req.body);

      if (result.statusCode === 400)
      return errorResponse(res, result.statusCode, result.message);

    return successResponse(
      res,
      result.statusCode,
      result.message,
      result.data
    );

    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

  static async answerQuestion(req, res) {
    
    try {
      const result = await QuestionManager.answerQuestion(req.body);

      if (result.statusCode === 400)
      return errorResponse(res, result.statusCode, result.message);

    return successResponse(
      res,
      result.statusCode,
      result.message,
      result.data
    );

    } catch (error) {
      return errorResponse(res, 500, error.message);
    }
  }

//   async upVoteAnswer(req, res) {
//     const { id } = req.params;
//     const { user } = req;
//     try {
//       const answer = await model.Question.findOne({
//         'answers._id': id,
//         'answers.voters': { $all: [user._id] }
//       });console.log(answer);
//       if (!answer) {
//         const upVoteAns = await model.Question.findOneAndUpdate(
//           { 'answers._id': id },
//           { $push: { 'answers.voters': user._id }, $inc: { 'answers.vote': 1 } },
//           { new: true }
//         );
//         return successResponse(res, 200, 'Successfully up voted Answer', upVoteAns);
//       } else {
//         return errorResponse(res, 400, 'You can only up vote once');
//       }
//     } catch (error) {
//       return errorResponse(res, 500, error.message);
//     }
//   },

// 
// 
// 
// 
// 
}
module.exports = QuestionController