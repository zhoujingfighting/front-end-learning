const { ipcRenderer } = require('electron')
const Timer  = require('timer.js')
function startWork(){
   let workTimer  = new Timer({
        ontick:() => {
            //启动开始的程序
            updateTime()
        },
        onend:()=>{
            //结束时的程序
            notification()
        }
    })
    workTimer.start(10)
}
function updateTime(ms){
    let timerContainer = document.getElementById('timer-container')
    timerContainer.innerText = ms
}
 async function notification(){
   let res = await ipcRenderer.invoke('work-notification')
   if(res === 'rest'){
        setTimeout(() => {
            alert('休息')
        }，5000)
   }else if(res === 'work'){
        startWork()
   }
}
startWork()