备注：这里的文件创建位置只出于测试方便，可以修改

1. create interface OpenHandlerTest
   /@ZStudio/zstudio-target-manage/src/frontend/widget-duplicate-test.ts
   export const OpenHandlerTest = Symbol('OpenHandlerTest');
   /\*\*

- `OpenHandlerTest` should be implemented to provide a new opener.
  _/
  export interface OpenHandlerTest {
  /\*\*
  _ A human-readable name of this handler.
  _/
  label?: string;
  /\*\*
  _ A css icon class of this handler.
  \*/
  iconClass?: string;

      open(factoryId: string, options?: OpenerOptions): MaybePromise<object | undefined>;

  }

2. 仿照 WidgetOpenHandler 实现 class WidgetDuplicateHandler
   引入的依赖：

/@ZStudio/zstudio-target-manage/src/frontend/widget-duplicate-test.ts
@inject(ApplicationShell) protected readonly shell: ApplicationShell;
@inject(WidgetManager) protected readonly widgetManager: WidgetManager;
在 WidgetDuplicateHandler 中实现 open 方法

/@ZStudio/zstudio-target-manage/src/frontend/widget-duplicate-test.ts
/\*\*

- Open a widget for the given options.
- Reject if the given options are not widget options or a widget cannot be opened.
- @param factoryId
- @param options the widget opener options.
-
- @returns promise of the widget that resolves when the widget has been opened.
  \*/
  async open(factoryId: string, options?: WidgetOpenerOptions): Promise<BaseWidget> {
  const widget = await this.getOrCreateWidget(factoryId, options);
  await this.doOpen(widget, options);
  return widget;
  }
  private async doOpen(widget: BaseWidget, options?: WidgetOpenerOptions): Promise<void> {
  const op: WidgetOpenerOptions = {
  mode: 'activate',
  ...options
  };
  if (!widget.isAttached) {
  this.shell.addWidget(widget, op.widgetOptions || { area: 'main' });
  }
  if (op.mode === 'activate') {
  await this.shell.activateWidget(widget.id);
  } else if (op.mode === 'reveal') {
  await this.shell.revealWidget(widget.id);
  }
  }
  其中关于 options 参数的类型定义：

/@theia/core/src/browser/widget-open-handler.ts
export interface WidgetOpenerOptions extends OpenerOptions {
/**
_ Determines whether the widget should be only opened, revealed or activated.
_ By default is `activate`.
\*/
mode?: WidgetOpenMode;
/**
_ Specify how an opened widget should be added to the shell.
_ By default to the main area.
\*/
widgetOptions?: ApplicationShell.WidgetOptions;
}
WidgetManager 的 getOrCreateWidget 方法会使用参数中的 factoryId 和 options 共同作为 widget 的 key 值，以此来判断 widget 是否已经存在。同样类型的 widget 的 factoryId 保持一致，应在 widgetOptions 中为每一个 widget 设置 id 以进行区别。

/@ZStudio/zstudio-target-manage/src/frontend/widget-duplicate-test.ts
private getOrCreateWidget(factoryId: string, options?: WidgetOpenerOptions): Promise<BaseWidget> {
const widgetOptions = this.createWidgetOptions(options);
return this.widgetManager.getOrCreateWidget(factoryId, widgetOptions) as Promise<BaseWidget>;
}
/\*\*

- create options witch used to get or create widget in `WidgetManager`
  \*/
  private createWidgetOptions(options?: WidgetOpenerOptions): Object {
  return { id: UUID.uuid4() };
  }
  /@ZStudio/zstudio-target-manage/src/frontend/widget-duplicate-test.ts
  /\*\*
- Closes all widgets that have the same factoryId have been opened.
- @param factoryId points to the widgets that should be closed.
- @param options the close options that should be applied to all widgets.
-
- @returns a promise of all closed widgets that resolves after they have been closed.
  \*/
  async closeAll(factoryId: string, options?: ApplicationShell.CloseOptions): Promise<BaseWidget[]> {
  const closed = await Promise.all(this.getAllWidgets(factoryId).map(widget => this.shell.closeWidget(widget.id, options)));
  return closed.filter(widget => !!widget) as BaseWidget[];
  }
  getAllWidgets(factoryId: string): BaseWidget[] {
  return this.widgetManager.getWidgets(factoryId) as BaseWidget[];
  }

3. @ZStudio/zstudio-target-manage/src/frontend/zstudio-program-manage-frontend-module.ts
   bind(WidgetDuplicateTest).toSelf().inSingletonScope();
   bind(OpenHandlerTest).to(WidgetDuplicateTest);
4. 现在可以通过给定 factoryId 实现 widget duplicate，下面创建 contribution class 来进行测试
   1）将 WidgetDuplicateTest 作为依赖注入
   /@ZStudio/zstudio-target-manage/src/frontend/zstudio-program-manage-contribution.ts
   @inject(WidgetDuplicateTest) protected readonly testHandler: WidgetDuplicateTest
   2）register command and register menu
   /@ZStudio/zstudio-target-manage/src/frontend/zstudio-program-manage-contribution.ts
   registerMenus(registry: MenuModelRegistry): void {
   registry.registerMenuAction(CommonMenus.HELP, {
   commandId: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST.id,
   label: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST.label,
   order: '1'
   });
   registry.registerMenuAction(CommonMenus.HELP, {
   commandId: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_2.id,
   label: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_2.label,
   order: '1'
   });
   registry.registerMenuAction(CommonMenus.HELP, {
   commandId: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_3.id,
   label: ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_3.label,
   order: '1'
   });
   }
   first command: create an explorer container
   second command: create a search container
   third command: close all search container

/@ZStudio/zstudio-target-manage/src/frontend/zstudio-program-manage-contribution.ts
registerCommands(registry: CommandRegistry): void {
registry.registerCommand(ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST, {
execute: async args => {
this.createTest(EXPLORER_VIEW_CONTAINER_ID, 'left');
return;
}
});
registry.registerCommand(ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_2, {
execute: async args => {
this.createTest('search-in-workspace', 'bottom');
return;
}
});
registry.registerCommand(ProgramManageCommands.PROGRAM_MANAGE_COMMANDS_TEST_3, {
execute: async args => {
this.closeTest('search-in-workspace');
return;
}
});
}
createTest(id: string, area: ApplicationShell.Area) {
this.testHandler.factoryId = id;
this.testHandler.open({widgetOptions: {area: area}});
this.messageService.info('program model commands test');
}

closeTest(id: string) {
this.testHandler.factoryId = id;
this.testHandler.closeAll();
} 5. 对于 ZStudioProgramManageWidget
对应的 createWidget 方法直接调用了 widgetManager.getOrCreateWidget(FILE_NAVIGATOR_ID)来生成 navigator widget，需要添加 options 参数，以避免多个 program manage widget 只能存在一个 navigator widget 的情况。

@ZStudio/zstudio-target-manage/src/frontend/zstudio-program-manage-frontend-module.ts
createWidget: async () => {
const widgetManager = container.get(WidgetManager);
const navigatorWidget = await widgetManager.getOrCreateWidget(FILE_NAVIGATOR_ID, {id: UUID.uuid4()});
...
}
备注：在 ZStudioProgramControlWidget 中，为使下拉菜单在视觉上跳出 program control widget，不被 navigator widget 遮挡，使用了 document.getElementById()方法获取 explorer-view-container 作为父元素。重复创建 ZStudioProgramManageWidget 时，explorer-view-container 发生重复，下拉菜单只会创建在第一个 id 为 explorer-view-container 的元素中，如有重复创建的需要，应对此寻找合适的解决方案。
