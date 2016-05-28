Roller = require "./diceroller.js"
roll = new Roller()

module.exports = (robot) ->

 robot.respond /block/, (res) ->
  robot.send roll.stats()
