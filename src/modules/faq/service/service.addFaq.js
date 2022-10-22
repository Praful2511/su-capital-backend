const mongoose = require('mongoose');
const Faq = require('../model');

const addFaq = async (teamData) => {
    // console.log("team Data", teamData)
    const addResult = await Faq.create({ ...teamData, });

    return addResult;
};
module.exports = addFaq