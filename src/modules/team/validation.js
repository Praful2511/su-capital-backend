const Joi = require('joi');
const { objectId } = require('../../validations/custom.validation');
// const { objectId } = require('./custom.validation');

const addTeam = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        phoneNumber: Joi.number().required(),
        // birthDate: Joi.date().required(),
        birthDate: Joi.required(),
        // gender: Joi.boolean().required(),
        gender: Joi.string().required(),
        // reportingTo: Joi.custom(objectId).required(),
        // roles: Joi.custom(objectId).required(),
        reportingTo: Joi.string().required(),
        roles: Joi.string().required(),
    }),
};
const listSeries = {
    body: Joi.object().keys({
        filter: Joi.object().required(),
        options: Joi.object().required(),
    }),
};

const removeSeries = {
    body: Joi.object().keys({
        id: Joi.string().required(),
    }),
};

const seriesListByCollectionId = {
    body: Joi.object().keys({
        start: Joi.number().required(),
        limit: Joi.number().required(),
        collectionId: Joi.string().required(),
    }),
}
module.exports = {
    addTeam,
};
