import type { Relationship } from "../types/Relationship";
import { stringToRelationshipPosition } from "../types/RelationshipPosition";

export function relationshipsMapping(data : any) : Relationship[] {
    const relationships : Relationship[] = [];
        for (const relation of data) {
            const relationship = relationshipMapping(relation);
            if (relationship != null) {
                relationships.push(relationship);
            }
        }
    return relationships;
        
}

function relationshipMapping(relation : any) : Relationship | null {
    if (relation.relatedToId == null) {
        return null;
    } else if (stringToRelationshipPosition(relation.positionInRelationship) !== undefined) {
        return {
            relatedToId: relation.relatedToId,
            positionInRelationship: stringToRelationshipPosition(relation.positionInRelationship)
        }
    } else {
        return {
            relatedToId: relation.relatedToId
        }
    }
}