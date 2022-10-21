const mongoose = require('mongoose');
const Team = require('../model');

const getTeamById = async (teamId) => {

    let response = await Team.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(teamId) }
        }]).exec()

    return response.map(item => {
        return {
            ...item
        }
    })
}

module.exports = getTeamById