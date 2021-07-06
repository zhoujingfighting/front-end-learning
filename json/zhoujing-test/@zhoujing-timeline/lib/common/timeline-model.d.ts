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
import { Command, Disposable, Event } from '@theia/core/lib/common';
import { URI } from '@theia/core/shared/vscode-uri';
export interface TimelineItem {
    source: string;
    uri: string;
    handle: string;
    timestamp: number;
    label: string;
    id?: string;
    description?: string;
    detail?: string;
    command?: Command;
    contextValue?: string;
}
export interface TimelineChangeEvent {
    id: string;
    uri: URI | undefined;
    reset: boolean;
}
export interface TimelineProvidersChangeEvent {
    readonly added?: string[];
    readonly removed?: string[];
}
export interface TimelineOptions {
    cursor?: string;
    limit?: number | {
        timestamp: number;
        id?: string;
    };
}
export interface InternalTimelineOptions {
    cacheResults: boolean;
    resetCache: boolean;
}
export interface Timeline {
    source: string;
    paging?: {
        readonly cursor: string | undefined;
    };
    items: TimelineItem[];
}
export interface TimelineProviderDescriptor {
    id: string;
    label: string;
    scheme: string | string[];
}
export interface TimelineProvider extends TimelineProviderDescriptor, Disposable {
    onDidChange?: Event<TimelineChangeEvent>;
    provideTimeline(uri: URI, options: TimelineOptions, internalOptions?: InternalTimelineOptions): Promise<Timeline | undefined>;
}
export interface TimelineSource {
    id: string;
    label: string;
}
//# sourceMappingURL=timeline-model.d.ts.map