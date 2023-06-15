/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {getMainDocId} from './docs';
import type {FullVersion} from './types';
import type {
  CategoryGeneratedIndexMetadata,
  DocMetadata,
} from '@docusaurus/plugin-content-docs';
import type {
  GlobalDoc,
  GlobalVersionWeirdSidebar,
} from '@docusaurus/plugin-content-docs/client';

function toGlobalDataDoc(doc: DocMetadata): GlobalDoc {
  return {
    id: doc.unversionedId,
    path: doc.permalink,
    sidebar: doc.sidebar,
  };
}

function toGlobalDataGeneratedIndex(
  doc: CategoryGeneratedIndexMetadata,
): GlobalDoc {
  return {
    id: doc.slug,
    path: doc.permalink,
    sidebar: doc.sidebar,
  };
}

export function toGlobalDataVersion(
  version: FullVersion,
): GlobalVersionWeirdSidebar {
  return {
    name: version.versionName,
    label: version.label,
    isLast: version.isLast,
    path: version.path,
    mainDocId: getMainDocId(version),
    docs: version.docs
      .map(toGlobalDataDoc)
      .concat(version.categoryGeneratedIndices.map(toGlobalDataGeneratedIndex)),
    draftIds: version.drafts.map((doc) => doc.unversionedId),
    sidebars: version.sidebars,
  };
}
