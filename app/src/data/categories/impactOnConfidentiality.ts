import type { Category } from "@/util/types/Category"
import direct from "../options/impactOnConfidentiality/direct";
import indirect from "../options/impactOnConfidentiality/indirect"
import none from "../options/impactOnConfidentiality/none";
const impactOnConfidentiality : Category = {
    "name": "Impact on Confidentiality",
    "definition": "Potential impact on confidentiality requirements.",
    "description": "",
    "exampleScenarios": [],
    "options": [ direct, indirect, none ],
    "imagePath": "impactOnConfidentiality.jpg",
    "discussionUrl": ""
}

export default impactOnConfidentiality;