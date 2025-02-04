/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BinaryFilter } from './BinaryFilter';
import type { Column } from './Column';
import type { ConceptSearch } from './ConceptSearch';
import type { KeywordSearch } from './KeywordSearch';
import type { ListFilter } from './ListFilter';
import type { SemanticSearch } from './SemanticSearch';
import type { SortOrder } from './SortOrder';
import type { UnaryFilter } from './UnaryFilter';

/**
 * The request for the select rows endpoint.
 */
export type SelectRowsOptions = {
    columns?: Array<(Array<string> | string | Column)>;
    searches?: Array<(ConceptSearch | SemanticSearch | KeywordSearch)>;
    filters?: Array<(BinaryFilter | UnaryFilter | ListFilter)>;
    sort_by?: Array<(Array<string> | string)>;
    sort_order?: SortOrder;
    limit?: number;
    offset?: number;
    combine_columns?: boolean;
};

