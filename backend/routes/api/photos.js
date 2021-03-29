const express = require('express');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Album, Photo } = require('../../db/models');

const router = express.Router();

router.get('/', 
asyncHandler (async (req, res, next) => {
    const photos = await Photo.findAll()

    return res.json({photos})
})

)

module.exports = router;