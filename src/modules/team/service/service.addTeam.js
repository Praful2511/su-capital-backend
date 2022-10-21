const mongoose = require('mongoose');
const Team = require('../model');

const addTeam = async (teamData) => {
    // console.log("team Data", teamData)
    const addResult = await Team.create({ ...teamData, });

    return addResult;
};
module.exports = addTeam