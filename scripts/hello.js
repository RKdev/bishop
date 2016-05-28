module.exports = function(robot) {
  robot.respond(/hello/,function(msg){
  msg.reply('world!');
  });
}
