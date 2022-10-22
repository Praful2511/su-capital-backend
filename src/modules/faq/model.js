const { object } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('../../models/plugins');

const counterIncrementor = require('../../utils/counterIncrementer');
const FaqSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true,
            default: '',
        },
        answer: {
            type: String,
            required: true,
            default: '',
        },
        active: {
            type: Boolean,
            default: true,
        },

        seqId: { type: Number }
    },
    {
        timestamps: true,
    }
);
// add plugin that converts mongoose to json
FaqSchema.plugin(toJSON);
FaqSchema.plugin(paginate);

FaqSchema.pre('save', async function (next) {
    const doc = this;
    doc.seqId = await counterIncrementor('faq')
    next();
});

/**
 * @typedef Faq
 */
const Faq = mongoose.model('faq', FaqSchema)

module.exports = Faq;
