
const router = require('express').Router()
const handlers = require('./routeHandler');

router.get('/',handlers.getAll)
router.get('/:postId',handlers.get)
router.post('/',handlers.add)
router.put('/:postId',handlers. edit)

module.exports  = router