import type { Option } from "./Option";
export interface Category {
    name: string;
    definition: string;
    description: string;
    exampleScenario: string;
    options: Option[];
    imagePath: string;
    discussionUrl: string;
}