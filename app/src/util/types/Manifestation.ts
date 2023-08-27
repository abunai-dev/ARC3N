export interface Manifestation {
    name: string;
    definition: string;
    exampleScenarios: string[];
}

export interface LocationManifestation extends Manifestation {
    type: "location";
}

export interface ArchitecturalElementTypeManifestation extends Manifestation {
    type: "architecturalElementType";
}

export interface ManageabilityManifestation extends Manifestation {
    type: "manageability";
}

export interface ResolutionTimeManifestation extends Manifestation {
    type: "resolutionTime";
}

export interface ReducibleByADDManifestation extends Manifestation {
    type: "reducibleByADD";
}

export interface ImpactOnConfidentialityManifestation extends Manifestation {
    type: "impactOnConfidentiality";
}

export interface SeverityOfImpactManifestation extends Manifestation {
    type: "severityOfImpact";
}

export interface TypeManifestation extends Manifestation {
    type: "type";
}
 




