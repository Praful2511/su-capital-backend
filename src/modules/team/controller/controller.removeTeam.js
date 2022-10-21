const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const Drops = require('../model')

const { sendResponse } = require('../../../utils/responseHandler');
const teamService = require('../service');

// const { updateSingleDropField } = require('../drops/service');

const removeTeam = catchAsync(async (req, res) => {
    // const { id } = await pick(req.body, ['id']);
    const { teamId } = req.params
    console.log("removeTeam teamId ========== ", teamId)
    const removed = await teamService.removeTeam(teamId);
    if (removed) {
        sendResponse(res, httpStatus.OK, { teamId }, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Not able to delete the team member');
    }
});

module.exports = removeTeam
