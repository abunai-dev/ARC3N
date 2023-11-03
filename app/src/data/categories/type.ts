import type { Category } from "@/util/types/Category"
import recognizedIgnorance from "../options/type/recognizedIgnorance";
import scenarioUncertainty from "../options/type/scenarioUncertainty";
import statisticalUncertainty from "../options/type/statisticalUncertainty";
const type : Category = {
    "name": "Type",
    "definition": "How much is known about the uncertainty and how can it be described.",
    "description": "",
    "exampleScenario": 'When there is recognized ignorance, one does not have any knowledge of the uncertainty. When there is scenario uncertainty, one knows the possible outcomes of the uncertainty. When there is statistical uncertainty, one knows the probability distribution of the uncertainty.',
    "options": [ recognizedIgnorance, scenarioUncertainty, statisticalUncertainty ],
    "imagePath": "type.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/24"
}

export default type;