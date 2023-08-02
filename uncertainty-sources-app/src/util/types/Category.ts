import type { Manifestation } from "./Manifestation";
export interface Category {
    name: string;
    definition: string;
    description: string;
    exampleScenarios: string[];
    manifestations: Manifestation[];
    imagePath: string;
}