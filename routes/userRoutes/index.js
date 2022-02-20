
const router = require('express').Router()
const handlers = require('./routeHandler');

router.get('/',handlers.getAll)
router.get('/:userId',handlers.get)
router.post('/',handlers.add)
router.put('/:userId',handlers. edit)

module.exports  = router