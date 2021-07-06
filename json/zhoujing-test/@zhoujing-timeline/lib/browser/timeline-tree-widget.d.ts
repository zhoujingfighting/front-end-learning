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
/// <reference types="react" />
import { CommandRegistry, MenuModelRegistry, MenuPath } from '@theia/core/lib/common';
import { TreeWidget, TreeProps, NodeProps } from '@theia/core/lib/browser/tree';
import { ContextMenuRenderer } from '@theia/core/lib/browser';
import { TimelineNode, TimelineTreeModel } from './timeline-tree-model';
import { TimelineService } from './timeline-service';
import { TimelineContextKeyService } from './timeline-context-key-service';
import * as React from '@theia/core/shared/react';
import { TimelineItem } from '../common/timeline-model';
export declare const TIMELINE_ITEM_CONTEXT_MENU: MenuPath;
export declare class TimelineTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    protected readonly timelineService: TimelineService;
    readonly model: TimelineTreeModel;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly commandRegistry: CommandRegistry;
    static ID: string;
    static PAGE_SIZE: number;
    protected readonly menus: MenuModelRegistry;
    protected readonly contextKeys: TimelineContextKeyService;
    constructor(props: TreeProps, timelineService: TimelineService, model: TimelineTreeModel, contextMenuRenderer: ContextMenuRenderer, commandRegistry: CommandRegistry);
    protected renderNode(node: TimelineNode, props: NodeProps): React.ReactNode;
    protected handleEnter(event: KeyboardEvent): void;
    protected handleLeft(event: KeyboardEvent): Promise<void>;
}
export declare namespace TimelineItemNode {
    interface Props {
        timelineItem: TimelineItem;
        commandRegistry: CommandRegistry;
        contextKeys: TimelineContextKeyService;
        contextMenuRenderer: ContextMenuRenderer;
    }
}
export declare class TimelineItemNode extends React.Component<TimelineItemNode.Props> {
    render(): JSX.Element | undefined;
    protected open: () => void;
    protected renderContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
}
//# sourceMappingURL=timeline-tree-widget.d.ts.map