import type { Manifestation } from "./Manifestation";
import type { Relationship } from "./Relationship";
import { Keyword } from "./Keyword";

export interface Uncertainty {
    id: number;
    name: string;
    location: Manifestation;
    architecturalType: Manifestation;
    type: Manifestation;
    manageability: Manifestation;
    resolutionTime: Manifestation;
    reducibleByADD: Manifestation;
    impactOnConfidentiality: Manifestation;
    severityOfImpact: Manifestation;
    relations: Relationship[];
    url: string;
    description: string;
    keywords: Keyword[];
    definition: string;
    exampleScenario: string;
    exampleImagePath: string;
    communityAnnotationUrl: string;
}