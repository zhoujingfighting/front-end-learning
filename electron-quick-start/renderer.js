// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
/*
k可以使用node.js API，也可以使用DOM API
1 ： 通过rendereer process向main process发送消息，这个过程有点像websocket，on,emit
2 :  写每个项目之前应该写好流程图
3 :  主进程是main.js,其他东西都应该放在renderer
*/
const {ipcRenderer} = require('electron')
window.addEventListener('DOMContentLoaded',() => {
    ipcRenderer.send('message','hello from renderer')
    ipcRenderer.on('reply',() => {
        console.log('gay')
    })
    //有点向websocket 
})
//
 