const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const Team = require('../model');


const { sendResponse } = require('../../../utils/responseHandler');
const seriesService = require('../service');
//get all series
const getAllTeam = catchAsync(async (req, res) => {

    // console.log("getAllTeam", req.body);
    // let options = req.body.options
    // let filter = req.body.filter
    // var result1 = {
    //     ...filter,
    //     active: true,
    // };
    let filter = {}
    var result1 = {
        ...filter,
        active: true,
    };
    let options = {}

    const result = await Team.paginate(result1, options); //.exec()
    console.log(result.page);
    try {
        if (result) {
            sendResponse(res, httpStatus.OK, result, null);
        }
    } catch (error) {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'cannot getting members');
        console.log(error);
    }
});

module.exports = getAllTeam
