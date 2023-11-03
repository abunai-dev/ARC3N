import type { Category } from "@/util/types/Category"
import fullyReducible from "../options/manageability/fullyReducible";
import irreducible from "../options/manageability/irreducible";
import partialReducible from "../options/manageability/partialReducible";
const manageability : Category = {
    "name": "Manageability",
    "definition": "Can more knowledge or appropriate means reduce the uncertainty.",
    "description": "",
    "exampleScenario": '',
    "options": [fullyReducible, irreducible, partialReducible ],
    "imagePath": "manageability.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/25"
}

export default manageability;