roller = require "./rollstats.js"
roll = new Roller()

module.exports = (robot) ->

 robot.respond /block/, (res) ->
  robot.send roll.stats()
