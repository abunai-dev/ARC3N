export interface Option {
    name: string;
    definition: string;
    exampleScenarios: string[];
}

export interface LocationOption extends Option {
    type: "location";
}

export interface ArchitecturalElementTypeOption extends Option {
    type: "architecturalElementType";
}

export interface ManageabilityOption extends Option {
    type: "manageability";
}

export interface ResolutionTimeOption extends Option {
    type: "resolutionTime";
}

export interface ReducibleByADDOption extends Option {
    type: "reducibleByADD";
}

export interface ImpactOnConfidentialityOption extends Option {
    type: "impactOnConfidentiality";
}

export interface SeverityOfImpactOption extends Option {
    type: "severityOfImpact";
}

export interface TypeOption extends Option {
    type: "type";
}
 




