import type { ArchitecturalElementTypeManifestation, ImpactOnConfidentialityManifestation, LocationManifestation, ManageabilityManifestation, ReducibleByADDManifestation, ResolutionTimeManifestation, SeverityOfImpactManifestation, TypeManifestation } from "./Manifestation";
import type { Relationship } from "./Relationship";
import { Keyword } from "./Keyword";

export interface Uncertainty {
    id: number;
    name: string;
    location: LocationManifestation;
    architecturalType: ArchitecturalElementTypeManifestation;
    type: TypeManifestation;
    manageability: ManageabilityManifestation;
    resolutionTime: ResolutionTimeManifestation;
    reducibleByADD: ReducibleByADDManifestation;
    impactOnConfidentiality: ImpactOnConfidentialityManifestation;
    severityOfImpact: SeverityOfImpactManifestation;
    relations: Relationship[];
    description: string;
    keywords: Keyword[];
    definition: string;
    exampleScenario: string;
    exampleImagePath: string;
    communityAnnotationUrl: string;
}

