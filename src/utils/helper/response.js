const successResponse = (res, _status, message, _data) => {
    const response = {
        statusCode: 200,
        message, 
        _data
    }
    return res.status(_status).json(response);
}

const errorResponse = (res, _status, message, data) => {
    const response = {statusCode: 400, message, data}
    return res.status(_status).json(response);
};
  
module.exports = { successResponse, errorResponse };