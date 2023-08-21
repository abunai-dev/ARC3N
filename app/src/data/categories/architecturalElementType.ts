import type { Category } from "@/util/types/Category"
import component from "../manifestations/architecturalElementType/component";
import connector from "../manifestations/architecturalElementType/connector";
import hardwareResource from "../manifestations/architecturalElementType/hardwareResource";
import interfaceManifestation from "../manifestations/architecturalElementType/interface";
import usageBehaviour from "../manifestations/architecturalElementType/usageBehaviour";
const architecturalElementType : Category = {
    "name": "Architectural Element Type",
    "definition": "This is a test if the type definition of category location is working",
    "description": "This is a test if the type description of category location is working",
    "exampleScenarios": [],
    "manifestations": [ component, connector, hardwareResource, interfaceManifestation, usageBehaviour ],
    "imagePath": "architecturalElementType.jpg"
}

export default architecturalElementType;