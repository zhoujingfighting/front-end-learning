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
// const {ipcRenderer} = require('electron')
// window.addEventListener('DOMContentLoaded',() => {
//     ipcRenderer.send('message','hello from renderer')
//     ipcRenderer.on('reply',() => {
//         console.log('gay')
//     })
//     //有点向websocket 
// })
//
const { ipcRenderer } = require('electron')
//渲染进程的renderer
const Timer  = require('timer.js')
function startWork(){
   let workTimer  = new Timer({
        ontick:(ms) => {
            //启动开始的程序
            updateTime(ms)
        },
        onend:()=>{
            //结束时的程序
            notification()
        }
    })
    workTimer.start(5)
}
function updateTime(ms){
    let timerContainer = document.getElementById('timer-container')
    let s = (ms / 1000).toFixed(0)
    let ss = s % 60
    let mm = (s / 60).toFixed(0)
    timerContainer.innerText = `${mm.toString().padStart(2,0)}:${ss.toString().padStart(2,0)}`
}
 async function notification(){
   let res = await ipcRenderer.invoke('work-notification')
   if(res === 'rest'){
        setTimeout(() => {
            alert('休息')
        },5 * 1000)
   }else if(res === 'work'){
        startWork()
   }
}
startWork()  