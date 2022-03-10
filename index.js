var robot = require("@jitsi/robotjs")
//console.log(robot)
const ran = Math.floor(Math.random() * 1200)

setInterval(() => {
    robot.moveMouse(Math.floor(Math.random() * 1200),190)
    robot.mouseClick()

  

},20000)
//Math.floor(Math.random()*60000)
