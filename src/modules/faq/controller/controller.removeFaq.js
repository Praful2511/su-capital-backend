const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const Drops = require('../model')

const { sendResponse } = require('../../../utils/responseHandler');
const faqService = require('../service');

// const { updateSingleDropField } = require('../drops/service');

const removeFaq = catchAsync(async (req, res) => {
    // const { id } = await pick(req.body, ['id']);
    const { faqId } = req.params
    const removed = await faqService.removeFaq(faqId);
    if (removed) {
        sendResponse(res, httpStatus.OK, { faqId }, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to delete the faq');
    }
});

module.exports = removeFaq
