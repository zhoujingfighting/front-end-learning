/********************************************************************************
 * Copyright (C) 2020 RedHat and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import { WidgetManager, ApplicationShell } from '@theia/core/lib/browser';
import { TimelineService } from './timeline-service';
import { Command, CommandContribution, CommandRegistry } from '@theia/core/lib/common';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
export declare class TimelineContribution implements CommandContribution, TabBarToolbarContribution {
    protected readonly widgetManager: WidgetManager;
    protected readonly timelineService: TimelineService;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly tabBarToolbar: TabBarToolbarRegistry;
    protected readonly shell: ApplicationShell;
    static readonly LOAD_MORE_COMMAND: Command;
    private readonly toolbarItem;
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    registerCommands(commands: CommandRegistry): void;
    private checkWidget;
}
//# sourceMappingURL=timeline-contribution.d.ts.map