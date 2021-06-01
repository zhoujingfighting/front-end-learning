## front-end-learning

### 各种技术快捷键的分享
#### electron

![image-20210601135009487](/Users/mima1234/Library/Application Support/typora-user-images/image-20210601135009487.png)

chrome开源项目：chromium

##### electron原理

- Chromium是多进程架构（browser和多个render）
- 进程间需要IPC通信
- web关注到的只是一个很小的部分

<img src="/Users/mima1234/Library/Application Support/typora-user-images/image-20210601140124922.png" alt="image-20210601140124922" style="zoom:67%;" />

核心原理在上述这个截图里！！！！

##### 为什么要开发桌面端

- 快捷入口
- 离线可用
- 调用系统能力
- 安全需求

![image-20210601140744854](/Users/mima1234/Library/Application Support/typora-user-images/image-20210601140744854.png)

##### 简要过程

![image-20210601141838727](/Users/mima1234/Library/Application Support/typora-user-images/image-20210601141838727.png)

![image-20210601151729797](/Users/mima1234/Library/Application Support/typora-user-images/image-20210601151729797.png)

##### 主进程

- electron运行package.json的main脚本的进程成为主进程
- 每个应用只有一个主进程
- 管理原声GUI，典型的窗口（BrowserWindow,Tray,Dock,Menu)
- 创建渲染进程
- 控制应用生命周期（app）

##### 渲染进程

- 展示web页面的进程成为渲染进程
- 通过Node.js，ELectron提供的API可以跟系统底层打交道
- 一个Electron应用可以有很多个渲染进程

![image-20210601152847559](/Users/mima1234/Library/Application Support/typora-user-images/image-20210601152847559.png)

###### 进程

An instance of a computer program that is being executed - 维基百科

打开main.js然后监视electron变化的命令是

```js
nodemon --watch main.js --exec 'electron .'
```

##### Demo项目(播放器应用)

