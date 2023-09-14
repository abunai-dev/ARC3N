import type { Category } from "@/util/types/Category"
import recognizedIgnorance from "../options/type/recognizedIgnorance";
import scenarioUncertainty from "../options/type/scenarioUncertainty";
import statisticalUncertainty from "../options/type/statisticalUncertainty";
const type : Category = {
    "name": "Type",
    "definition": "How much is known about the uncertainty and how can it be described.",
    "description": "",
    "exampleScenarios": [],
    "options": [ recognizedIgnorance, scenarioUncertainty, statisticalUncertainty ],
    "imagePath": "type.jpg",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/24"
}

export default type;