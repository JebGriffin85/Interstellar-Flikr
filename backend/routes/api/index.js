const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const albumRouter = require('./myAlbum');
const photoRouter = require('./photos');

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { route } = require('./session.js');




router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/myAlbum', albumRouter);

router.use('/photos', photoRouter)


module.exports = router;