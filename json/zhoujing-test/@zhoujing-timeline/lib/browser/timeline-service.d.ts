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
import { Disposable, Event } from '@theia/core/lib/common';
import { URI } from '@theia/core/shared/vscode-uri';
import { InternalTimelineOptions, Timeline, TimelineChangeEvent, TimelineItem, TimelineOptions, TimelineProvider, TimelineProvidersChangeEvent, TimelineSource } from '../common/timeline-model';
export declare class TimelineService {
    private readonly providers;
    private readonly onDidChangeProvidersEmitter;
    readonly onDidChangeProviders: Event<TimelineProvidersChangeEvent>;
    private readonly onDidChangeTimelineEmitter;
    readonly onDidChangeTimeline: Event<TimelineChangeEvent>;
    registerTimelineProvider(provider: TimelineProvider): Disposable;
    unregisterTimelineProvider(id: string): void;
    getSources(): TimelineSource[];
    getSchemas(): string[];
    getTimeline(id: string, uri: URI, options: TimelineOptions, internalOptions?: InternalTimelineOptions): Promise<Timeline | undefined>;
}
export declare class TimelineAggregate {
    readonly items: TimelineItem[];
    readonly source: string;
    readonly uri: string;
    private _cursor?;
    get cursor(): string | undefined;
    set cursor(cursor: string | undefined);
    constructor(timeline: Timeline);
    add(items: TimelineItem[]): void;
}
//# sourceMappingURL=timeline-service.d.ts.map