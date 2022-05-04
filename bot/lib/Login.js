/*
 * @Desc: 登录
 * @Author: lwp
 * @Date: 2020-04-29 18:51:49
 * @LastEditors: lwp
 * @LastEditTime: 2020-05-15 18:15:23
 */
const logger = require('../../util/logger')
/**
 * 登录
 * @param {object} bot 
 * @param {string} _id
 * @param {object} user 
 */
const onLogin = async (bot, robot_id, user) => {
  logger.info(`机器人${bot} 登陆啦!!!`)
  console.log(`机器人${bot} 登陆啦!!!`)
  
  bot.id = user.id
  //初始化群聊
  let roomList = await bot.Room.findAll()
  // for (let i = 0; i < roomList.length; i++) {
    // const group = await Group.findOne({ id: roomList[i].id },{_id:1})
    // if (!group) {
      // roomList[i].payload.robotId = user.id
      // await Group.create(roomList[i].payload)
    // }else{
      // await Group.updateOne({_id:group._id},roomList[i].payload)
    // }
  // }
  //初始化好友
  // const friends = await bot.Contact.findAll() 
  // let friendsA =[]
  // const notids=['filehelper','fmessage',user.id]
  // friends.forEach(item => {
    // if(item.payload.friend&&notids.indexOf(item.payload.id)<0){
      // item.payload.robotId = user.id
      // friendsA.push(item.payload)
    // } 
  // })
  // for(let j=0;j<friendsA.length;j++){
    // const friend = await Friend.findOne({ id: friendsA[j].id },{_id:1})
    // if (!friend) {
      // await Friend.create(friendsA[j])
    // }else{
      // await Friend.updateOne({_id:friend._id},friendsA[j])
    // }
  // }
  global.bot = bot
  await bot.say("hello")
  //require('./Task').init()
  return {isLogin:true}
}
/**
 * 退出
 * @param {String} user 
 */
async function onLogout(user) {
  delete global.bot
  logger.info(`机器人${user} 退出`)
}
module.exports ={onLogin,onLogout}




