const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const teamService = require('../service');

const Series = require('../model')
const { sendResponse } = require('../../../utils/responseHandler');
// const { updateSingleDropField } = require('../drops/service');

const getTeamById = catchAsync(async (req, res) => {
    // const { teamId } = await pick(req.params, ['id']);
    const { teamId } = req.params
    console.log("teamId id---", teamId);
    // const userId = req.user ? req.user.id : null
    const list = await teamService.getTeamById(teamId);
    if (list) {
        sendResponse(res, httpStatus.OK, list, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to get team member, please try again');
    }
});

module.exports = getTeamById