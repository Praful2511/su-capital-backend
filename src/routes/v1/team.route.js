const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const teamValidation = require('../../modules/team/validation');
const { addTeam, updateTeam, getTeamById, getAllTeam, removeTeam } = require("../../modules/team/controller/index");
const router = express.Router();


router.route('/').post(validate(teamValidation.addTeam), addTeam);
router.route('/').get(getAllTeam);
router.route('/:teamId').put(validate(teamValidation.addTeam), updateTeam);
router.route('/:teamId').get(getTeamById);
router.route('/:teamId').delete(removeTeam);

// router.route('/add').post(validate(teamValidation.addTeam), addTeam);
// router.route('/:teamId').post(getTeamById);
// router.route('/update/:teamId').post(validate(teamValidation.addTeam), updateTeam);
// router.route('/delete/:teamId').post(removeTeam);
// router.route('/').post(getAllTeam);

module.exports = router;