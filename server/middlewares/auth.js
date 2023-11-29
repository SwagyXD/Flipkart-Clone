const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');
const asyncErrorHandler = require('./asyncErrorHandler');

exports.isAuthenticatedUser = asyncErrorHandler(async (req, res, next) => {
    const { token } = req.cookies;
    // console.log("2553")
    // console.log(token)
    // res.send(token)
    if (!token) {
        return next(new ErrorHandler("Please Login to Access", 400))
    }

    try {
    const decodedData = jwt.verify(token, "secret");
    req.user = await User.findById(decodedData.id);
    next();
  } catch (err) {
    // Handle the error here. For example, you can redirect the user to the login page
    res.redirect("/login");
  } 
   

});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed`, 403));
        }
        next();
    }
}
