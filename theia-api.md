### 源码分析

theia源码都在packages下的文件夹中，分为好多模块，下面我会把每个模块的作用按照官方文档给翻译出来

#### bulk-edit

The `@theia/bulk-edit` extension contributes a `Refactor Preview` widget to the application that displays WorkspaceEdits to end-users

...目前还没有接触过，翻译起来有点生硬（待续）

#### callhierarchy

The `@theia/callhierarchy` extension contributes a `call hierarchy` view which displays the caller hierarchy for a selected callable.

...目前还没有接触过，翻译起来有点生硬(待续)

#### console

The `@theia/console` extension contributes a `console` widget which is used to evaluate expressions (in the form of REPL [(Read-Eval-Print-Loop)](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop)) when debugging

`@theia/console`扩展包提供了一个debug的时候用来评估代码性能的控制台组件

#### core

The `@theia/core` extension is the main extension for all Theia-based applications, and provides the main framework for all dependent extensions.
The extension provides the base APIs for all Theia-based applications, including:

- Application APIs
- Shell APIs
- Base Widgets
- Contribution Points (ex: commands, menu items, keybindings

`@theia/core`是所有基于Theia开发的项目的主要拓展包，并且为所有依赖拓展包提供主要框架，以及基础APIs

- Application APIs
- Shell APIs
- Base Widgets
- Contribution Points(ex: commands,menu items,keybindings)

#### debug

`DebugService` is used to initialize a new `DebugSession`. This service provides functionality to configure and to start a new debug session. The workflow is the following. If user wants to debug an application and there is no debug configuration associated with the application then the list of available debuggers is requested to create a suitable debug configuration. When configuration is chosen it is possible to alter the configuration by filling in missing values or by adding/changing/removing attributes.

In most cases the default behavior of the `DebugSession` is enough. But it is possible to provide its own implementation. The `DebugSessionFactory` is used for this purpose via `DebugSessionContribution`. Documented model objects are located [here](https://github.com/eclipse-theia/theia/tree/master/packages/debug/src/browser/debug-model.ts)

`DebugService`用来初始化一个新的`DebugSession`，这个模块会为配置和开始一个新的debug session提供很多功能模块。这个模块的工作原理如下，当用户想要debug但是又没有合适的debuggers与用户正在操作的模块相关联的话，这个时候可用的debuggers就会配置合适的debugg选项，当选中一些配置项时，可能就会通过补充缺失的值选项与增加/改变/移除一些属性值来解决



