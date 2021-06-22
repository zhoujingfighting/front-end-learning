// Modules to control application life and create native browser window
// const {app, BrowserWindow,ipcMain} = require('electron')
// //模块是完全基于事件的,事件流
// const path = require('path')
// app.on('ready',() => {
//   const mainWindow  = new BrowserWindow({
//       width:800,
//       height:600,
//       webPreferences:{
//         nodeIntegration:true,
//         contextIsolation:false
//       }
//   })
//   mainWindow.loadFile('index.html')
// //   const secondWindow  = new BrowserWindow({
// //     width:800,
// //     height:600,
// //     webPreferences:{
// //       nodeIntegration:true,
// //       contextIsolation:false
// //     },
// //     parent:mainWindow
// // }) //第二个窗口的儿子，第一个窗口关闭，第二个窗口也就关闭了
//    ipcMain.on('message',(event,arg) => {
//         console.log(event)
//         console.log(arg)
//         event.sender.send('reply','get it')
//    })
// })
//创建一个板
// function createWindow () {
//   // Create the browser window.
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, 'preload.js')
//     }
//   })

//   // and load the index.html of the app.
//   mainWindow.loadFile('index.html')

//   // Open the DevTools.
//   // mainWindow.webContents.openDevTools()
// }

// // This method will be called when Electron has finished
// // initialization and is ready to create browser windows.
// // Some APIs can only be used after this event occurs.
// app.whenReady().then(() => {
//   createWindow()
  
//   app.on('activate', function () {
//     // On macOS it's common to re-create a window in the app when the
//     // dock icon is clicked and there are no other windows open.
//     if (BrowserWindow.getAllWindows().length === 0) createWindow()
//   })
// })

// // Quit when all windows are closed, except on macOS. There, it's common
// // for applications and their menu bar to stay active until the user quits
// // explicitly with Cmd + Q.
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') app.quit()
// })

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const { app, BrowserWindow,Notification,ipcMain } = require('electron');
const path = require('path');
let win;
app.on('ready' ,() => {
    win = new BrowserWindow({
      width:300,
      height:300,
      webPreferences:{
        nodeIntegration : true,
        contextIsolation:false
        //出于安全的考虑，这个以前一直时禁用掉的 
      }
    })
    win.loadFile(path.join(__dirname , 'index.html'))
    handleIPC()//处理IPC事件
})

function handleIPC(){
    ipcMain.handle('work-notification',async function (){
      let res = await new Promise((resolve,reject) => {
        let notification =  new Notification({
          title : '任务结束',
          body  : '是否开始休息',
          actions : [{text : '开始休息',type:'button'}],
          closeButtonText:'继续工作'
        })
        notification.show()
        //这个才会展示
        notification.on('action',() => {
          resolve('rest')
        })
        notification.on('close',()=>{
          resolve('work') 
        })
      })
      return res
    })
}