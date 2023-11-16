import type { RelationshipPosition } from "./RelationshipPosition";
export interface Relationship {
    relatedToId: number;
    positionInRelationship?: RelationshipPosition;
}