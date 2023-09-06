import type { Category } from "@/util/types/Category"
import direct from "../options/impactOnConfidentiality/direct";
import indirect from "../options/impactOnConfidentiality/indirect"
const impactOnConfidentiality : Category = {
    "name": "Impact on Confidentiality",
    "definition": "Potential impact on confidentiality requirements.",
    "description": "",
    "exampleScenarios": [],
    "options": [ direct, indirect ],
    "imagePath": "impactOnConfidentiality.jpg",
    "discussionUrl": ""
}

export default impactOnConfidentiality;