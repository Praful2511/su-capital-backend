const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const Faq = require('../model')

const { sendResponse } = require('../../../utils/responseHandler');
const seriesService = require('../service');
//get all series
const getAllFaq = catchAsync(async (req, res) => {

    //   let options = req.body.options
    //   let filter = req.body.filter
    let options = {};
    let filter = {}
    var result1 = {
        ...filter,
        active: true,
    };
    //   const result = await Series.paginate(result1, options); //.exec()
    const result = await Faq.paginate(result1, options); //.exec()
    console.log(result.page);
    try {
        if (result) {
            sendResponse(res, httpStatus.OK, result, null);
        }
    } catch (error) {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'cannot getting faq');
        console.log(error);
    }
});

module.exports = getAllFaq
