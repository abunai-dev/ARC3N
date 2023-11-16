export enum RelationshipPosition {
    Parent = "parent",
    Child = "child",
}

const reverseRelationshipPosition: Record<string, RelationshipPosition> = {
    parent: RelationshipPosition.Parent,
    child: RelationshipPosition.Child,
};

export function stringToRelationshipPosition(value: string) : RelationshipPosition {
    return reverseRelationshipPosition[value];
}