const mongoose = require('mongoose');
const Faq = require('../model');

const updateFaq = async (faqId, reqBody) => {
    const faqSearchQuery = { active: true, _id: mongoose.Types.ObjectId(faqId) };

    const updateResult = await Faq.findOneAndUpdate(faqSearchQuery, reqBody, { new: true });
    return updateResult;
};


module.exports = updateFaq