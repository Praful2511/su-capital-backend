const { object } = require('joi');
const mongoose = require('mongoose');
const { toJSON, paginate } = require('../../models/plugins');

const counterIncrementor = require('../../utils/counterIncrementer');
const TeamSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            default: '',
        },
        lastName: {
            type: String,
            required: true,
            default: '',
        },
        email: {
            type: String,
            required: true,
            default: '',
        },
        phoneNumber: {
            type: Number,
            required: true,
            default: '',
        },
        birthDate: {
            // type: Date,
            type: String,
            required: true,
        },
        gender: {
            type: String,
            default: true,
        },
        reportingTo: {
            // type: mongoose.SchemaTypes.ObjectId,
            type: String,
            required: true,
        },
        roles: {
            // type: mongoose.SchemaTypes.ObjectId,
            type: String,
            required: true,
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
TeamSchema.plugin(toJSON);
TeamSchema.plugin(paginate);

TeamSchema.pre('save', async function (next) {
    const doc = this;
    doc.seqId = await counterIncrementor('team')
    next();
});

/**
 * @typedef Team
 */
const Team = mongoose.model('team', TeamSchema)

module.exports = Team;
