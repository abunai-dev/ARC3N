import type { Category } from "@/util/types/Category"
import recognizedIgnorance from "../manifestations/type/recognizedIgnorance";
import scenarioUncertainty from "../manifestations/type/scenarioUncertainty";
import statisticalUncertainty from "../manifestations/type/statisticalUncertainty";
const type : Category = {
    "name": "Type",
    "definition": "This is a test if the definition of type is working",
    "description": "This is a test if the description of type is working",
    "exampleScenarios": [],
    "manifestations": [ recognizedIgnorance, scenarioUncertainty, statisticalUncertainty ],
    "imagePath": "type.jpg"
}

export default type;