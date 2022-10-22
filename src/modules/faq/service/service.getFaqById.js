const mongoose = require('mongoose');
const Faq = require('../model');

const getFaqById = async (faqId) => {

    let response = await Faq.aggregate([
        {
            $match: { _id: mongoose.Types.ObjectId(faqId) }
        }]).exec()

    return response.map(item => {
        return {
            ...item
        }
    })
}

module.exports = getFaqById