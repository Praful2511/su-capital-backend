const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const DigitalArt = require('../model')

const { sendResponse } = require('../../../utils/responseHandler');
const faqService = require('../service');

// const { updateSingleDropField } = require('../drops/service');

const updateFaq = catchAsync(async (req, res) => {
    const reqBody = req.body;
    // const { teamId } = await pick(req.params, ['id']);
    const { faqId } = req.params
    const updatedFaq = await faqService.updateFaq(faqId, reqBody);
    if (updatedFaq) {
        sendResponse(res, httpStatus.OK, updatedFaq, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Faq not found !');
    }
});

module.exports = updateFaq
