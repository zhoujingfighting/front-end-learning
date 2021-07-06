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
import { SelectableTreeNode, TreeModelImpl } from '@theia/core/lib/browser/tree';
import { TimelineItem } from '../common/timeline-model';
export interface TimelineNode extends SelectableTreeNode {
    timelineItem: TimelineItem;
}
export declare class TimelineTreeModel extends TreeModelImpl {
    updateTree(items: TimelineItem[], hasMoreItems: boolean): void;
}
//# sourceMappingURL=timeline-tree-model.d.ts.map