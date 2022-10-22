const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const faqService = require('../service');
const Faq = require('../model')
const { sendResponse } = require('../../../utils/responseHandler');
// const { updateSingleDropField } = require('../drops/service');

const addFaq = catchAsync(async (req, res) => {
    // console.log("req user", req.user);
    // var ownerId = req.user.id
    const insertResult = await faqService.addFaq({ ...req.body });

    if (insertResult) {
        sendResponse(res, httpStatus.OK, insertResult, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to create faq, please try again');
    }
});

module.exports = addFaq
