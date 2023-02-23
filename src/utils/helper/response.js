const successResponse = (res, _status, message, _data) => {
    const response = { status: true, message }
    return res. json(response) ;
}
const errorResponse = (res, _status, message) => {
    const response = {status: false, message}
    return res.json(response);
};
  
module.exports = { successResponse, errorResponse };