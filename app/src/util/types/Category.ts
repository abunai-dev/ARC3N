import type { Option } from "./Option";
export interface Category {
    name: string;
    definition: string;
    description: string;
    exampleScenarios: string[];
    options: Option[];
    imagePath: string;
    discussionUrl: string;
}