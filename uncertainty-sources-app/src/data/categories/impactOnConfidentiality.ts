import type { Category } from "@/util/types/Category"
import direct from "../manifestations/impactOnConfidentiality/direct";
import indirect from "../manifestations/impactOnConfidentiality/indirect"
const impactOnConfidentiality : Category = {
    "name": "Impact on Confidentiality",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ direct, indirect ],
    "imagePath": "/api/images/categories/impactOnConfidentiality.jpg"
}

export default impactOnConfidentiality;