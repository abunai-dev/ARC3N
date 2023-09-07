import type { ArchitecturalElementTypeOption, ImpactOnConfidentialityOption, LocationOption, ManageabilityOption, ReducibleByADDOption, ResolutionTimeOption, SeverityOfImpactOption, TypeOption } from "./Option";
import type { Relationship } from "./Relationship";
import { Keyword } from "./Keyword";

export interface Uncertainty {
    id: number;
    name: string;
    location: LocationOption;
    architecturalType: ArchitecturalElementTypeOption;
    type: TypeOption;
    manageability: ManageabilityOption;
    resolutionTime: ResolutionTimeOption;
    reducibleByADD: ReducibleByADDOption;
    impactOnConfidentiality: ImpactOnConfidentialityOption;
    severityOfImpact: SeverityOfImpactOption;
    relations: Relationship[];
    description: string;
    keywords: Keyword[];
    definition: string;
    exampleScenario: string;
    exampleImagePath: string;
    communityAnnotationUrl: string;
}

