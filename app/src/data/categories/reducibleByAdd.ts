import type { Category } from "@/util/types/Category"
import notReducible from "../options/reducibleByADD/notReducible";
import reducible from "../options/reducibleByADD/reducible";
const reducibleByAdd : Category = {
    "name": "Reducible by Add",
    "definition": "Uncertainty resolvable by an architectural design decision.",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "options": [ notReducible, reducible ],
    "imagePath": "reducibleByAdd.jpg",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/27"
}

export default reducibleByAdd;