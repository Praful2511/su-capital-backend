const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const faqService = require('../service');

const Series = require('../model')
const { sendResponse } = require('../../../utils/responseHandler');
// const { updateSingleDropField } = require('../drops/service');

const getFaqById = catchAsync(async (req, res) => {
    // const { teamId } = await pick(req.params, ['id']);
    const { faqId } = req.params
    // const userId = req.user ? req.user.id : null
    const list = await faqService.getFaqById(faqId);
    if (list) {
        sendResponse(res, httpStatus.OK, list, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to get faq, please try again');
    }
});

module.exports = getFaqById