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
import { Message } from '@theia/core/shared/@phosphor/messaging';
import { ApplicationShell, BaseWidget, Panel, PanelLayout } from '@theia/core/lib/browser';
import { TimelineTreeWidget } from './timeline-tree-widget';
import { TimelineService } from './timeline-service';
import { CommandRegistry, SelectionService } from '@theia/core/lib/common';
import { TimelineEmptyWidget } from './timeline-empty-widget';
import URI from '@theia/core/lib/common/uri';
import { URI as CodeURI } from '@theia/core/shared/vscode-uri';
export declare class TimelineWidget extends BaseWidget {
    protected panel: Panel;
    static ID: string;
    private readonly timelinesBySource;
    protected readonly resourceWidget: TimelineTreeWidget;
    protected readonly timelineService: TimelineService;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly applicationShell: ApplicationShell;
    protected readonly timelineEmptyWidget: TimelineEmptyWidget;
    protected readonly selectionService: SelectionService;
    constructor();
    protected init(): void;
    protected loadTimelineForSource(source: string, uri: CodeURI, reset: boolean): Promise<void>;
    loadTimeline(uri: URI, reset: boolean): Promise<void>;
    refresh(uri?: URI): void;
    private suitableWidgetsOpened;
    private getCurrentWidgetUri;
    protected get containerLayout(): PanelLayout | undefined;
    protected onUpdateRequest(msg: Message): void;
    protected onAfterAttach(msg: Message): void;
}
//# sourceMappingURL=timeline-widget.d.ts.map