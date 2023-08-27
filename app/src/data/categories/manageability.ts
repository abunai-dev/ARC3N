import type { Category } from "@/util/types/Category"
import fullyReducible from "../manifestations/manageability/fullyReducible";
import irreducible from "../manifestations/manageability/irreducible";
import partialReducible from "../manifestations/manageability/partialReducible";
const manageability : Category = {
    "name": "Manageability",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [fullyReducible, irreducible, partialReducible ],
    "imagePath": "manageability.jpg",
    "discussionUrl": ""
}

export default manageability;