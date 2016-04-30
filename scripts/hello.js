module.exports = function(robot) {
  robot.hear(/hello/,function(msg){
  msg.reply('world!');
  });
}
