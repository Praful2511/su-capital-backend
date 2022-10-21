const mongoose = require('mongoose');
const Team = require('../model');

const removeTeam = async (teamId) => {
    let filterQuery = { active: true, _id: mongoose.Types.ObjectId(teamId) }
    const removed = await Team.updateOne(filterQuery, { $set: { active: false } })
    return removed
};

module.exports = removeTeam