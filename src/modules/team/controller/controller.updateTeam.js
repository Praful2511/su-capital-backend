const httpStatus = require('http-status');
const pick = require('../../../utils/pick');
const catchAsync = require('../../../utils/catchAsync');
const DigitalArt = require('../model')

const { sendResponse } = require('../../../utils/responseHandler');
const teamService = require('../service');

// const { updateSingleDropField } = require('../drops/service');

const updateTeam = catchAsync(async (req, res) => {
    const reqBody = req.body;
    // const { teamId } = await pick(req.params, ['id']);
    const { teamId } = req.params
    const updatedSeries = await teamService.updateTeam(teamId, reqBody);
    if (updatedSeries) {
        sendResponse(res, httpStatus.OK, updatedSeries, null);
    } else {
        sendResponse(res, httpStatus.BAD_REQUEST, null, 'Team Member not found !');
    }
});

module.exports = updateTeam
