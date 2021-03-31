const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Album, PhotoToAlbum, Photo } = require('../../db/models');

const router = express.Router();

router.post('/', 
    asyncHandler(async (req, res, next) => {
        const { photoId, currentAlbum } = req.body
        const addPhoto = PhotoToAlbum.create({
            albumId: currentAlbum,
            photoId
        })
        return res.json({
            addPhoto
        })
    })
)

// router.get('/:id',
// asyncHandler(async (req, res, next) => {
    
//     const album = await PhotoToAlbum.findAll({
//         where: {
//             albumId: req.params.id,
        
//         }
//     })
//     return res.json(album)
// })
// )

router.get('/:id',
    asyncHandler(async (req, res, next) => {

        const album = await Album.findByPk( req.params.id, {
         
            include: Photo 
        })
        return res.json(album)
    })
)

module.exports = router;