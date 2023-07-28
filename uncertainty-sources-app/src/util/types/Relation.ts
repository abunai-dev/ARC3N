import { Relationship } from "./Relationship";
export interface Relation {
    firstUncertaintyId: number;
    secondUncertaintyId: number;
    relationTypeFirstToSecond: Relationship;
}