const mongoose = require('mongoose');
const Team = require('../model');

const updateTeam = async (teamId, reqBody) => {
    const seriesSearchQuery = { active: true, _id: mongoose.Types.ObjectId(teamId) };

    const updateResult = await Team.findOneAndUpdate(seriesSearchQuery, reqBody, { new: true });
    return updateResult;
};


module.exports = updateTeam