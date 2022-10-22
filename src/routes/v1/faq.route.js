const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const teamValidation = require('../../modules/team/validation');
const { addFaq, updateFaq, getAllFaq, getFaqById, removeFaq } = require("../../modules/faq/controller/index")
const router = express.Router();

router.route('/').post(addFaq);
router.route('/').get(getAllFaq);
router.route('/:faqId').get(getFaqById);
router.route('/:faqId').put(updateFaq);
router.route('/:faqId').delete(removeFaq);

module.exports = router;