import type { Category } from "@/util/types/Category"
import recognizedIgnorance from "../options/type/recognizedIgnorance";
import scenarioUncertainty from "../options/type/scenarioUncertainty";
import statisticalUncertainty from "../options/type/statisticalUncertainty";
const type : Category = {
    "name": "Type",
    "definition": "How much is known about the uncertainty and how can it be described.",
    "description": "",
    "exampleScenario": 'When an uncertainty is classified as "Recognized Ignorance", it is not tangible. When it is classified as "Scenario Uncertainty", it is tangible but not quantifiable. When it is classified as "Statistical Uncertainty", it is quantifiable ',
    "options": [ recognizedIgnorance, scenarioUncertainty, statisticalUncertainty ],
    "imagePath": "type.png",
    "discussionUrl": "https://github.com/abunai-dev/UncertaintySourceArchive/issues/24"
}

export default type;