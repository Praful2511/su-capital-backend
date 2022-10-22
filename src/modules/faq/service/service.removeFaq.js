const mongoose = require('mongoose');
const Faq = require('../model');

const removeFaq = async (faqId) => {
    let filterQuery = { active: true, _id: mongoose.Types.ObjectId(faqId) }
    const removed = await Faq.updateOne(filterQuery, { $set: { active: false } })
    return removed
};

module.exports = removeFaq