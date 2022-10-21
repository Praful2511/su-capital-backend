const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const teamService = require('../service');
const Series = require('../model')
const { sendResponse } = require('../../../utils/responseHandler');
// const { updateSingleDropField } = require('../drops/service');

const addTeam = catchAsync(async (req, res) => {
    // console.log("req user", req.user);
    // var ownerId = req.user.id
    const insertResult = await teamService.addTeam({ ...req.body });

    if (insertResult) {
        sendResponse(res, httpStatus.OK, insertResult, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to create team member, please try again');
    }
});

module.exports = addTeam
