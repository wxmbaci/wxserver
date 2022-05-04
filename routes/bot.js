const router = require('koa-router')()
const botLogin = require('../middleware/botLogin')
const robotCtrl = require('../controller/robot')


router.prefix('/bot')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a bot response!'
})

router.get('/roomlist', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/login', robotCtrl.login)
router.post('/loginOut', robotCtrl.loginOut)
router.post('/friend/say', botLogin(), robotCtrl.friendSay)
router.post('/room/say', botLogin(), robotCtrl.roomSay)
router.get('/room/:id', botLogin(), robotCtrl.getRoom)
router.put('/room/:id', botLogin(), robotCtrl.updateRoom)
module.exports = router
