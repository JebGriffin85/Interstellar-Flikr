const express = require('express');
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Album, Photo, Comment } = require('../../db/models');

const router = express.Router();

router.get('/', 
asyncHandler (async (req, res, next) => {
    const photos = await Photo.findAll()

    return res.json({photos})
})

)

router.get('/:id', 
asyncHandler (async (req, res, next) => {
    const photoId = parseInt(req.params.id, 10)

    const comments = await Comment.findAll({
        where: { photoId }
    })
    
    return res.json({comments})

})
)

router.post('/',
asyncHandler (async (req, res, next) => {

    const userId = req.body.userId
    const photoId = req.body.photoId
    const body = req.body.comment
    const newComment = await Comment.create({
        body,
        userId,
        photoId
    })
 
    const comments = await Comment.findAll({
        where: {photoId}
    })
    return res.json({comments})

})
)

router.delete('/',
  asyncHandler (async (req, res, next) => {
      const commentId = req.body.commentId
      const comment = await Comment.findByPk(commentId)
      await comment.destroy()
      res.json({msg: 'success'})
  })

)


module.exports = router;