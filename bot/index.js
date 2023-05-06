/*
 * @Desc: robot
 * @Author: lwp
 * @Date: 2020-04-29 19:03:52
 * @LastEditors: lwp
 * @LastEditTime: 2020-05-14 15:34:40
 */
const logger = require('../util/logger')
const {
	Contact,
	Message,
	ScanStatus,
	WechatyBuilder,
	log,
	types,
} = require('wechaty')
const { PuppetWechat4u } = require('wechaty-puppet-wechat4u')
const {onLogin,onLogout} = require('./lib/Login')
const onFriendShip = require('./lib/FriendShip')
const onMessage = require('./lib/Message')
const {onRoomJoin,onRoomLeave} = require('./lib/Room')
class Bot {
  constructor(_id, debug = false) {
    this._id = _id
  }
  log(...args) {
    if (this.debug) console.log(...args)
  }
  //启动
  async start() {
	let puppet = new PuppetXp()
	let bot = WechatyBuilder.build({
			name: "bot_name_grace",
			puppet,
		})
    const res = await new Promise((resolve, reject) => {
      bot.on('scan', (qrcode) => {
        resolve({qrcode})
        }).on('login', async (user)=>{
            const res = await onLogin(bot,this._id,user)
            resolve(res)
        })
        .on('message', onMessage)
        .on('friendship', onFriendShip)
        .on('room-join', onRoomJoin)
        .on('room-leave', onRoomLeave)
        .on('error', error => {
          logger.error('机器故障，error：' + error)
        })
        .on('logout', onLogout)
        .start()
    });
    return res
  }
}
module.exports = Bot
