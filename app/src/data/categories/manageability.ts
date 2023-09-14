import type { Category } from "@/util/types/Category"
import fullyReducible from "../options/manageability/fullyReducible";
import irreducible from "../options/manageability/irreducible";
import partialReducible from "../options/manageability/partialReducible";
const manageability : Category = {
    "name": "Manageability",
    "definition": "Can more knowledge or appropriate means reduce the uncertainty.",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "options": [fullyReducible, irreducible, partialReducible ],
    "imagePath": "manageability.jpg",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/25"
}

export default manageability;