/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Compute scores along a given concept for documents.
 */
export type ConceptSignal = {
    signal_name: 'concept_score';
    embedding: string;
    namespace: string;
    concept_name: string;
    draft?: string;
};

