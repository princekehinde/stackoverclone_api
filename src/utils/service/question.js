const  {
    generateToken,
    decodeToken
  }= require("../helper/jwt");
  const  {
    successResponse,
  }= require("../helper/response");
const QuestionModel = require("../../model/index");

class QuestionManager {
  
  /**
   *@description - This method is used to create a new product
   * @param {Object} category the data to be create
   * @param {Object} - the created product
   */
  
  static async askQue(data) {
      const { grade, category, question} = data;

      const saveQuestion = await QuestionModel.Question.create ({
        grade: grade,
        category: category,
        question: question,
      });

      return {
        statusCode: 200,
        message: "Successfully Posted question",
        data: saveQuestion
      };
  }

  /**
   * @description - this method is used to get all products
   * @param{Object} query - the Query to be used
   * @return{Object} - The response of the products
   */
  static async allQue (data){
    const { page, limit } = data;

    const pageQuery = {
      page: page ? parseInt(page) : 1,
      limit: limit ? parseInt(limit) : 10,
    }
       const allQue = await UserModel.Question.find({ pageQuery});
      if (allQue.length > 0) {
        return  {
          statusCode: 200,
          message: 'Successfully Fetched All Question',
          data: allQue
        };
      }
  }

  static async upVoteQue (data){
     const { id } = data;
    const { user } = data;
    try{
             const question = await QuestionModel.Question.findOne({
        id: id,
        voters: { $all: [user] }
      });
      if (!question) {
        const upVoteQue = await QuestionModel.Question.findOneAndUpdate(
          { _id: id },
          { $push: { voters: user }, $inc: { vote: 1 } },
          { new: true }
        );
        return  {
          statusCode: 200,
          message: 'Successfully up voted Question',
          data: upVoteQue
        };
      }
    }catch (error){
      throw new Error(error);
    }
  }


static async downVoteQue (data){
     const { id } = data;
    const { user } = data;
 try{
    const question = await QuestionModel.Question.findOne({
        id: id,
        voters: { $all: [user] }
      });
      if (!question) {
        const downVoteQue  = await QuestionModel.Question.findOneAndUpdate(
          { id: id },
          { $pull: { voters: user}, $inc: { vote: -1 } },
          { new: true }
        );
      } 
     return  {
       statusCode: 200,
       message: 'Successfully down voted Question',
       data: question
     };
 }catch (error){
   throw new Error(error);
 }
}

static async answerQuestion (data){
 const { id } = data;
    const { user } = data;
    const { answer } = data;
    try {
      const answeredQuestion = await QuestionModel.Question.findOneAndUpdate(
        { _id: id },
        {
          $push: { answers: [{ answer: answer, userId: user}] }
        },

        { new: true }
      );
    return  {
      statusCode: 200,
      message: 'Successfully answered Question',
      data: answeredQuestion
    };
    } catch (error) {
      throw new Error(error);
  }
    }
}
module.exports = QuestionManager